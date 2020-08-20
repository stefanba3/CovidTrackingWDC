(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        var cols = [{
            id: "date",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "state",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "positive",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "negative",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "pending",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "hospitalizedCurrently",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "hospitalizedCumulative",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "inIcuCurrently",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "inIcuCumulative",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "onVentilatorCurrently",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "onVentilatorCumulative",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "recovered",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "hospitalized",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "totalTestResults",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "death",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "dateChecked",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "deathIncrease",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "hospitalizedIncrease",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "negativeIncrease",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "positiveIncrease",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "totalTestResultsIncrease",
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
        var query = "https://api.covidtracking.com/v1/states/daily.json"
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
