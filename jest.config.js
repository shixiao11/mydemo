module.exports={
    reporters: [
    'default',
    ['jest-junit',
        {
            pageTitle: 'Test Report',
            outputDirectory:'./test-results/',
            outputName: 'report.xml',
        },
    ],
],
};