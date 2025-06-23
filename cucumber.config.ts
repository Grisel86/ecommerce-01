export default {
    paths: ['features/**/*.feature'],
    require: ['steps/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['html:reports/report.html', 'summary'],
    publishQuiet: true,
};