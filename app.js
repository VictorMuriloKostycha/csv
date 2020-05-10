const User = require('./models/user')
const XLSX = require('xlsx')
require('./db/mongoose')


const loadNotes = () => {
    try{
        const workbook =  XLSX.readFile('notes.xlsx')
        const sheet_name_list = workbook.SheetNames;
        const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        //console.log(xlData);
        return xlData
    }catch (e) {
        return console.log(e)
    }
}

const saveNotes = () => {
    const notes = loadNotes()
    notes.forEach(async (note) => {
        const user = new User(note)
        try {
            await user.save()
            console.log('saved')
        } catch (e) {
           console.log(e)
        }
    })

    // const user = new User(req.body)

    
}

saveNotes();

