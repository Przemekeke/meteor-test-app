AccountsTemplates.addFields([
    {
        _id: 'username',
        type: 'text',
        displayName: 'Username',
        required: true,
    },
    {
        _id: 'gender',
        type: "radio",
        displayName: "Gender",
        select: [
            {
                text:'Male',
                value: 'male'
            },
            {
                text:'Female',
                value: 'female'
            }
        ]
    }
]) 
