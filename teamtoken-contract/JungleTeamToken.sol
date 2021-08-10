pragma solidity 0.5.16;

interface IBEP20 {
    function totalSupply() external view returns (uint256);
    function decimals() external view returns (uint8);
    function symbol() external view returns (string memory);
    function name() external view returns (string memory);
    function getOwner() external view returns (address);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address _owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}
contract Context {
    constructor () internal { }
    function _msgSender() internal view returns (address payable) { return msg.sender; }
    function _msgData() internal view returns (bytes memory) { this; return msg.data; }
}
library SafeMath {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");
        return c;
    }
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;
        return c;
    }
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) { return 0; }
        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");
        return c;
    }
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        uint256 c = a / b;
        return c;
    }
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, "SafeMath: modulo by zero");
    }
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}
contract Ownable is Context {
    address private _owner;
    address private _governance;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event GovernanceTransferred(address indexed msgSender, address indexed previousGovernance, address indexed newGovernance);

    constructor () internal {
        address msgSender = _msgSender();
        _owner = msgSender;
        _governance = address(0); // making sure no governance exists until we set it
        emit OwnershipTransferred(address(0), msgSender);
    }

    function owner() public view returns (address) { return _owner; }
    function governance() public view returns (address) { return _governance; }

    modifier onlyOwner() { require(_owner == _msgSender(), "Ownable: caller is not the owner") ; _ ; }
    modifier onlyGovernance() { require(_governance == _msgSender(), "Ownable: caller is not governance") ; _ ; }

    function renounceOwnership() public onlyOwner { 
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }
    function transferOwnership(address newOwner) public onlyOwner { _transferOwnership(newOwner); }
    function _transferOwnership(address newOwner) internal {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
    function setGovernance(address newGovernance) public onlyOwner { _setGovernance(newGovernance); }
    function _setGovernance(address newGovernance) internal {
        require(newGovernance != address(0), "Ownable: new governance is the zero address");
        emit GovernanceTransferred(_msgSender(), _governance, newGovernance);
        _governance = newGovernance;
    }
}

contract JungleTeamToken is Context, IBEP20, Ownable {
    using SafeMath for uint256;

    struct profile { 
        bytes32 textProfileIPFS;
        bytes32 imgProfileIPFS;
        address devAddress;
    }

    bytes2 constant IPFS_PREFIX = 0x1220; // to had before every IPFS storage location
    uint256 constant INITIAL_SUPPLY = 100 * 10 ** 18; // only 100 coins exists for representing 100% of the project

    mapping(address => uint256) private _devsIDs;
    mapping(uint256 => profile) private _devsProfile;
    uint16 private _devsCount;
    uint16 private _nextDevID;

    mapping (address => uint256) private _balances;
    mapping (address => mapping (address => uint256)) private _allowances;
    uint256 private _totalSupply;
    uint8 private _decimals;
    string private _symbol;
    string private _name;

    event NewDev(address indexed newDevAddress, uint256 indexed devID);
    event DevProfileSet(uint256 indexed devID, bytes32 ipfsTextLocation, bytes32 ipfsImgLocation);
    event DevRevoked(uint256 indexed devID);

    constructor() public {
        _name = "JungleTeamToken";
        _symbol = "JUGT";
        _decimals = 18;
        _totalSupply = INITIAL_SUPPLY;
        
        // set myself as the first dev
        address msgSender = _msgSender();
        _devsCount = 1;
        _devsIDs[msgSender] = 1;
        _devsProfile[1].devAddress = msgSender;
        emit NewDev(msgSender, 1);
        _nextDevID = 2;
        
        // initialy receive 100% of the coins
        _balances[msgSender] = _totalSupply;
        emit Transfer(address(0), msgSender, _totalSupply);
    }

    modifier onlyOwnProfile() { 
        require(_devsProfile[_devsIDs[_msgSender()]].devAddress == _msgSender(), "JungleTeamToken: devs can only set their own profile");
        _ ;
    }

    // owner and governace
    function getOwner() external view returns (address) { return owner(); }
    function getGovernance() external view returns (address) { return governance(); }

    // dev profiles
    function getDevsCount() external view returns (uint16) {return _devsCount; }
    function getDevAddress(uint256 devID) external view returns (address) { return _devsProfile[devID].devAddress; }
    function getDevID(address devAddress) external view returns (uint256) { return _devsIDs[devAddress]; }
    function getDevTextProfile(uint256 devID) external view returns (bytes32) { return _devsProfile[devID].textProfileIPFS; }
    function getDevImgProfile(uint256 devID) external view returns (bytes32) { return _devsProfile[devID].imgProfileIPFS; }
    function getIPFSPrefix() external pure returns (bytes2) { return IPFS_PREFIX; }
    function newDev(address newDevAddress) external onlyOwner returns (bool) {
        _devsIDs[newDevAddress] = _nextDevID;
        _devsProfile[_nextDevID].devAddress = newDevAddress;
        emit NewDev(newDevAddress, _nextDevID);
        _nextDevID = _nextDevID + 1;
        _devsCount = _devsCount + 1;
        return true;
    }
    function devSetProfile(bytes32 ipfsTextLocation, bytes32 ipfsImgLocation) external onlyOwnProfile returns (bool) {
        uint256 devID = _devsIDs[_msgSender()];
        _devsProfile[devID].textProfileIPFS = ipfsTextLocation;
        _devsProfile[devID].imgProfileIPFS = ipfsImgLocation;
        emit DevProfileSet(devID, ipfsTextLocation, ipfsImgLocation);
        return true;
    }
    function ownerSetDevProfile(bytes32 ipfsTextLocation, bytes32 ipfsImgLocation, uint256 devID) external onlyOwner returns (bool) {
        require(_devsProfile[devID].devAddress != address(0), "JungleTeamToken: This profile does not exist");
        _devsProfile[devID].textProfileIPFS = ipfsTextLocation;
        _devsProfile[devID].imgProfileIPFS = ipfsImgLocation;
        emit DevProfileSet(devID, ipfsTextLocation, ipfsImgLocation);
        return true;
    }
    function ownerRevokeProfile(uint256 devID) external onlyOwner returns (bool) {
        require(_devsProfile[devID].devAddress != address(0), "JungleTeamToken: This profile does not exist");
        address devAddress = _devsProfile[devID].devAddress;
        _transfer(devAddress, owner(), _balances[devAddress]);
        delete _devsProfile[devID];
        delete _devsIDs[devAddress];
        emit DevRevoked(devID);
        return true;
    }

    // BEP20 standars
    function decimals() external view returns (uint8) { return _decimals; }
    function symbol() external view returns (string memory) { return _symbol; }
    function name() external view returns (string memory) { return _name; }
    function totalSupply() external view returns (uint256) { return _totalSupply; }
    function balanceOf(address account) external view returns (uint256) { return _balances[account]; }
    function transfer(address recipient, uint256 amount) external returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }
    function allowance(address owner, address spender) external view returns (uint256) { return _allowances[owner][spender]; }
    function approve(address spender, uint256 amount) external returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) {
        _transfer(sender, recipient, amount);
        _approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, "BEP20: transfer amount exceeds allowance"));
        return true;
    }
    function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].add(addedValue));
        return true;
    }
    function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].sub(subtractedValue, "BEP20: decreased allowance below zero"));
        return true;
    }
    function _transfer(address sender, address recipient, uint256 amount) internal {
        require(sender != address(0), "BEP20: transfer from the zero address");
        require(recipient != address(0), "BEP20: transfer to the zero address");
        require(_devsIDs[recipient] != uint256(0), "This address is not a Jungle Team Developer! Contact owner to have a profile");
        _balances[sender] = _balances[sender].sub(amount, "BEP20: transfer amount exceeds balance");
        _balances[recipient] = _balances[recipient].add(amount);
        emit Transfer(sender, recipient, amount);
    }
    function _approve(address owner, address spender, uint256 amount) internal {
        require(owner != address(0), "BEP20: approve from the zero address");
        require(spender != address(0), "BEP20: approve to the zero address");
        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    // burn (this will serve to transfert the JungleTeamTokens into GovernanceTokens in the future)
    function burnFrom(address account, uint256 amount) external onlyGovernance {
        uint256 currentAllowance = _allowances[account][_msgSender()];
        require(currentAllowance >= amount, "ERC20: burn amount exceeds allowance");
        _approve(account, _msgSender(), currentAllowance.sub(amount, "BEP20: transfer amount exceeds allowance"));
        _burn(account, amount);
    }
    function _burn(address account, uint256 amount) internal {
        require(account != address(0), "ERC20: burn from the zero address");
        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        _balances[account] = accountBalance.sub(amount);
        _totalSupply -= amount;
        emit Transfer(account, address(0), amount);
    }
    function getInitialSupply() external pure returns (uint256) { return INITIAL_SUPPLY; }
}