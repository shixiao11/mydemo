module.exports={
    reporters: [
    'default',
    ['jest-junit',
        {
            pageTitle: 'Test Report',
            outputDirectory:'test_result/',
            outputName: 'report',
        },
    ],
],
};