(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        var cols = [{
            id: "dataQualityGrade",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "date",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "death",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "deathConfirmed",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "deathIncrease",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "deathProbable",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: 'fips',
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "hospitalizedCumulative",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "hospitalizedCurrently",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "hospitalizedIncrease",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "inIcuCumulative",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "inIcuCurrently",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "lastUpdateEt",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "negative",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "negativeTestsViral",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "onVentilatorCumulative",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "onVentilatorCurrently",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "pending",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "positive",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "positiveCasesViral",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "positiveIncrease",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "recovered",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "state",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "totalTestResults",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "totalTestResultsIncrease",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "totalTestsViral",
            dataType: tableau.dataTypeEnum.int
        }];

        var tableSchema = {
            id: "stateDaily",
            alias: "stateDaily",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    myConnector.getData = function (table, doneCallback) {
        var query = "https://raw.githubusercontent.com/liamcryan/covid-snapshot/master/covid-tracking-states-daily.json"
        $.getJSON(query, function(response) {
            table.appendRows(response);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "COVID Tracking Project Tableau Web Data Connector";
            tableau.submit();
        });
    });
})();
