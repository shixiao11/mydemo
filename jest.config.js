module.exports={
    reporters: [
    'default',
    ['jest-junit',
        {
            pageTitle: 'Test Report',
            outputDirectory:'~/repo/test_result/',
            outputName: 'report',
        },
    ],
],
};