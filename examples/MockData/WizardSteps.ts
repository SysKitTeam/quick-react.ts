export const steps = [
    {
        title: 'Script Details',
        index: 0
    },
    {
        title: 'Enter Powershell',
        index: 1
    },
    {
        title: 'Script Results',
        index: 2,
        className: 'wizard__step-window-large'
    },
    {
        title: 'Finish',
        index: 3,
        optionalButtons: [
            {
                children: 'SCHEDULE',
                className: 'shell__btn-medium shell__btn-blue'
            }
        ]
    }
];
