//geting conatct
const getContact = (req,res)=>{
    res.status(200).json({message:"This is successfully"});
}
// create contact
const createContact = (req,res)=>{
    res.status(200).json({message:"Create contacts"});
}
// create contact
const anotherContact = (req,res)=>{
    res.status(200).json({message:`Get contacts for ${req.params.id}`});
}
//update contact 
const updateContact = (req, res) => {
    const contactId = req.params.id;
    res.status(200).json({ message: `Updated contact with ID ${contactId}` });
}
//delete contact by id
const deleteContact = (req,res)=>{
    res.status(200).json({message:`Get contacts are deleted for ${req.params.id}`});
}


module.exports = {getContact, createContact,anotherContact,updateContact,deleteContact};
