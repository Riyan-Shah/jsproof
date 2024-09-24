// Array to hold the NFT objects
const NFTs = [];

// Function to mint a new NFT
function mintNFT(name, eyeColor, shirtType, bling) {
    if (!name || !eyeColor || !shirtType || !bling) {
        console.error("All parameters (name, eyeColor, shirtType, bling) are required to mint an NFT.");
        return;
    }
    
    const NFT = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };

    NFTs.push(NFT);
    console.log(`Minted: ${name}`);
}

// Function to list all minted NFTs
function listNFTs() {
    if (NFTs.length === 0) {
        console.log("No NFTs have been minted yet.");
        return;
    }
    
    NFTs.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Eye Color: ${nft.eyeColor}`);
        console.log(`  Shirt Type: ${nft.shirtType}`);
        console.log(`  Bling: ${nft.bling}`);
        console.log('---------------------');
    });
}

// Function to get the total supply of minted NFTs
function getTotalSupply() {
    const totalSupply = NFTs.length;
    console.log(`Total NFTs minted: ${totalSupply}`);
    return totalSupply;
}

// Calling the functions to demonstrate their functionality
mintNFT("Bob", "Blue", "Hoodie", "Gold Chain");
mintNFT("Alice", "Green", "T-Shirt", "Silver Necklace");
listNFTs();
getTotalSupply();