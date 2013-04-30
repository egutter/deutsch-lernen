var app = angular.module('form-verb', []);

function VerbsController($scope) {
    $scope.verbs = [
        {english: 'work', german: 'arbeiten',
            singular: ['arbeite', 'arbeitest', 'arbeitet'],
            plural: ['arbeiten', 'arbeitet', 'arbeiten']},
        {english: 'believe', german: 'glauben',
            singular: ['glaube', 'glaubst', 'glaubt'],
            plural: ['glauben', 'glaubt', 'glauben']},
        {english: 'want', german: 'wollen',
            singular: ['will', 'willst', 'will'],
            plural: ['wollen', 'wollt', 'wollen']},
        {english: 'must', german: 'müssen',
            singular: ['muss', 'musst', 'muss'],
            plural: ['müssen', 'müsst', 'müssen']},
        {english: 'eat', german: 'essen',
            singular: ['esse', 'isst', 'isst'],
            plural: ['essen', 'esst', 'essen']},
        {english: 'be', german: 'sein',
            singular: ['bin', 'bist', 'ist'],
            plural: ['sind', 'seid', 'sind']},
        {english: 'have', german: 'haben',
            singular: ['habe', 'hast', 'hat'],
            plural: ['haben', 'habt', 'haben']},
        {english: 'drink', german: 'trinken',
            singular: ['trinke', 'trinkst', 'trinkt'],
            plural: ['trinken', 'trinkt', 'trinken']}
    ];

    $scope.singularPerson = ['ich', 'du', 'er/sie/es'];
    $scope.pluralPerson = ['wir', 'ihr', 'sie/Sie'];
    $scope.score = 0;

    $scope.pickVerb = function () {
        var index = Math.floor((Math.random() * $scope.verbs.length));
        return $scope.verbs[index];
    };

    $scope.singularNumber = Math.floor((Math.random() * 3));
    $scope.pluralNumber = Math.floor((Math.random() * 3));

    $scope.valid = function (response, expected) {
        var isValid = (response && response.toLowerCase().trim() == expected);
        return isValid;
    };

    $scope.answers = function() {
       $scope.response.infinitive = $scope.translate.german;
       $scope.response.singular = $scope.translate.singular[$scope.singularNumber];
       $scope.response.plural = $scope.translate.plural[$scope.pluralNumber];
    };

    $scope.reset = function() {
      form.reset();
      $scope.translate = $scope.pickVerb();
      $scope.singularNumber = Math.floor((Math.random() * 3));
      $scope.pluralNumber = Math.floor((Math.random() * 3));
      $scope.response = {};
    };

    $scope.reset();
}