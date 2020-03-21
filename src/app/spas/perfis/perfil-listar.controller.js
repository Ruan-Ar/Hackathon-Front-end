angular.module("hackaton-stefanini").controller("PerfilListarController", PerfilListarController);
PerfilListarController.$inject = ["$rootScope", "$scope", "$location",
    "$q", '$filter', '$routeParams', 'HackatonStefaniniService'];

function PerfilListarController($rootScope, $scope, $location,
    $q, $filter, $routeParams, HackatonStefaniniService) {
    vm = this;

    vm.qdePorPagina = 5;
    vm.ultimoIndex = 0;
    vm.contador = 0;

    vm.url = "http://localhost:8080/treinamento/api/perfis/";
   

    vm.init = function () {
        HackatonStefaniniService.listar(vm.url).then(
            function (responsePerfis) {
                if (responsePerfis.data !== undefined)
                    vm.listaPerfis = responsePerfis.data; 
            })
            

    vm.editar = function(id){
        if(id !== undefined)
            $location.path("EditarPerfis/" + id);
        else
            $location.path("EditarPerfis");
    }

                    
                    
    vm.remover = function(id){
        HackatonStefaniniService.exluir(vm.url + id).then(
            function (response){
                vm.init();
            })
    }



        }

    }
