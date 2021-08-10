![JungleEx](https://ipfs.io/ipfs/QmSqktoxt6VagJt7azEmxCqKm8C7GbyjWeaREEeFbvvGtz "Logo Title Text 1")

Welcome to the JungleTeamToken (JUGT) README
---
**Goal of this token**  
Represents the ownership of the project until the governance token is launched. Once the Governance Contract is deployed, the JungleTeamToken will transferable for Governance Tokens.

**How it works**
+ There are only 100 JungleTeamTokens in the initial liquidity (18 decimals).
+ When tranfered, the contract will make sure the recipient is actualy a dev that has an account.
+ Only the devs can have JugleTeamToken at their address

How to set profile
---
1. **First you need your dev ID.**  
⋅⋅⋅For this the owner must call `newDev(<your address>)` method. Only the owner can create new accounts. To become a dev, join the [discord](https://discord.gg/yN2yEDsYnc) or send me a direct message. (telegram: @LiquidBlocks, discord: FCote#7672)
2. **Second you need to have your profile image and text description on IPFS**  
⋅⋅⋅(1) simply get the ipfs desktop app. 
⋅⋅⋅(2) Then create a simple .json file according to the following structure (everything is optional):
````
{
    "name": "<Your display name>",
    "country": "<Where you are from>",
    "description": "<Your description>"
}
````
⋅⋅⋅(3) You will also need a profile image.  
⋅⋅⋅(4) once you have both files (the image and the .json file), open your IPFS desktop app in the file panel. From there use the import option from the top right and add both files.
⋅⋅⋅(5) Now you should see both files in the IPSF files section, select them and pin to local node (or any other node you have).
3. **send the IPFS location to the JungleTeam Contract**
⋅⋅⋅(1) Copy the CID of the file and remove the first 2 chars. Should be "Qm", so "QmemtAUpp8V6CgdLhesi5GFbvPCa9zbSTmKh7FzebG3WBa" => "emtAUpp8V6CgdLhesi5GFbvPCa9zbSTmKh7FzebG3WBa".
⋅⋅⋅(2) This is the base58 hash of the files, now to send it to the JungleTeamToken contract, you need to use a [bsae58 to hex converter](https://incoherency.co.uk/base58/).
⋅⋅⋅(3) Finaly, you go to the JungleTeamToken page and put both hex into the set dev profile section and click send. Oc you need a connection to metamask to send the transaction and some BNB to pay the fees. (If you want to join the team but have no way of paying the fees, contact me (owner) and we can find a solution).