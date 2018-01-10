//menu
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    closeLogin();
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "200px";
    document.getElementById('main').style.display='block';
    closeNav2();
}

function openNav2() {
    document.getElementById("mySidenavDina").style.width = "200px";
    document.getElementById("mySidenavDina").style.marginLeft = "200px";
}
function closeNav2() {
    document.getElementById("mySidenavDina").style.width = "0px";
}

function openNav3() {
    document.getElementsByClassName("adminCadastroForm2").style.width = "500px";
    closeNav2();
}
function closeNav3() {
    document.getElementById("mySidenavDina").style.width = "0px";
}

function desativaForm(){
	document.getElementById("adminCadastroForm").style.display = 'none';
	document.getElementById("frenteLojaCadastroForm").style.display = 'none';
	document.getElementById("frenteLojaMovimentoForm").style.display = 'none';
	document.getElementById("frenteLojaConsultaForm").style.display = 'none';

	document.getElementById("estoqueCadastroForm").style.display = 'none';
	document.getElementById("estoqueMovimentoForm").style.display = 'none';
	document.getElementById("estoqueConsultaForm").style.display = 'none';

	document.getElementById("frenteCaixaCadastroForm").style.display = 'none';
	document.getElementById("frenteCaixaMovimentoForm").style.display = 'none';
	document.getElementById("frenteCaixaConsultaForm").style.display = 'none';

	document.getElementById("caixaCadastroForm").style.display = 'none';
	document.getElementById("caixaMovimentoForm").style.display = 'none';
	document.getElementById("caixaConsultaForm").style.display = 'none';


	document.getElementById("gerencialCadastroForm").style.display = 'none';
	document.getElementById("gerencialMovimentoForm").style.display = 'none';
	document.getElementById("gerencialRelatorioForm").style.display = 'none';


	document.getElementById("creditoCobrancaCadastroForm").style.display = 'none';
	document.getElementById("creditoCobrancaMovimentoForm").style.display = 'none';
	document.getElementById("creditoCobrancaConsultaForm").style.display = 'none';

	document.getElementById("contabilFiscalCadastroForm").style.display = 'none';
	document.getElementById("contabilFiscalMovimentoForm").style.display = 'none';
	document.getElementById("contabilFiscalConsultaForm").style.display = 'none';
}

function adminCadastro(){
	openNav2()
	desativaForm();
	document.getElementById("adminCadastroForm").style.display = 'block';
}

function frenteLojaCadastro(){
	openNav2()
	desativaForm();
	document.getElementById("frenteLojaCadastroForm").style.display = 'block';
}

function frenteLojaMovimento(){
	openNav2()
	desativaForm();
	document.getElementById("frenteLojaMovimentoForm").style.display = 'block';
}

function frenteLojaConsulta(){
	openNav2()
	desativaForm();
	document.getElementById("frenteLojaConsultaForm").style.display = 'block';
}

function estoqueCadastro(){
	openNav2()
	desativaForm();
	document.getElementById("estoqueCadastroForm").style.display = 'block';
}

function estoqueMovimento(){
	openNav2()
	desativaForm();
	document.getElementById("estoqueMovimentoForm").style.display = 'block';
}

function estoqueConsulta(){
	openNav2()
	desativaForm();
	document.getElementById("estoqueConsultaForm").style.display = 'block';
}

function frenteCaixaCadastro(){
	openNav2()
	desativaForm();
	document.getElementById("frenteCaixaCadastroForm").style.display = 'block';
}

function frenteCaixaMovimento(){
	openNav2()
	desativaForm();
	document.getElementById("frenteCaixaMovimentoForm").style.display = 'block';
}

function frenteCaixaConsulta(){
	openNav2()
	desativaForm();
	document.getElementById("frenteCaixaConsultaForm").style.display = 'block';
}

function caixaCadastro(){
	openNav2()
	desativaForm();
	document.getElementById("caixaCadastroForm").style.display = 'block';
}

function caixaMovimento(){
	openNav2()
	desativaForm();
	document.getElementById("caixaMovimentoForm").style.display = 'block';
}

function caixaConsulta(){
	openNav2()
	desativaForm();
	document.getElementById("caixaConsultaForm").style.display = 'block';
}

function gerencialCadastro(){
	openNav2()
	desativaForm();
	document.getElementById("gerencialCadastroForm").style.display = 'block';
}

function gerencialMovimento(){
	openNav2()
	desativaForm();
	document.getElementById("gerencialMovimentoForm").style.display = 'block';
}

function gerencialRelatorio(){
	openNav2()
	desativaForm();
	document.getElementById("gerencialRelatorioForm").style.display = 'block';
}

function creditoCobrancaCadastro(){
	openNav2()
	desativaForm();
	document.getElementById("creditoCobrancaCadastroForm").style.display = 'block';
}

function creditoCobrancaMovimento(){
	openNav2()
	desativaForm();
	document.getElementById("creditoCobrancaMovimentoForm").style.display = 'block';
}

function creditoCobrancaConsulta(){
	openNav2()
	desativaForm();
	document.getElementById("creditoCobrancaConsultaForm").style.display = 'block';
}

function contabilFiscalCadastro(){
	openNav2()
	desativaForm();
	document.getElementById("contabilFiscalCadastroForm").style.display = 'block';
}

function contabilFiscalMovimento(){
	openNav2()
	desativaForm();
	document.getElementById("contabilFiscalMovimentoForm").style.display = 'block';
}

function contabilFiscalConsulta(){
	openNav2()
	desativaForm();
	document.getElementById("contabilFiscalConsultaForm").style.display = 'block';
}



function formulario(){
	document.getElementById("adminForm").style.width = "50%";
}





//login

// Get the modal
	var modal = document.getElementById('id01');

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
function closeLogin(){
	document.getElementById('id01').style.display='none';
	document.getElementById('main').style.display='none';
}

//menu flutuante

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function mostraAdmin() {
	document.getElementById('admin').style.display = 'block';
}
function escondeAdmin() {
	document.getElementById('admin').style.display = 'none';
}
function mostraFrenteLoja() {
	document.getElementById('frenteLoja').style.display = 'block';
}
function escondeFrenteLoja() {
	document.getElementById('frenteLoja').style.display = 'none';
}
function mostraEstoque() {
	document.getElementById('estoque').style.display = 'block';
}
function escondeEstoque() {
	document.getElementById('estoque').style.display = 'none';
}
function mostraFrenteCaixa() {
	document.getElementById('frenteCaixa').style.display = 'block';
}
function escondeFrenteCaixa() {
	document.getElementById('frenteCaixa').style.display = 'none';
}
function mostraCaixa() {
	document.getElementById('caixa').style.display = 'block';
}
function escondeCaixa() {
	document.getElementById('caixa').style.display = 'none';
}
function mostraGerencial() {
	document.getElementById('gerencial').style.display = 'block';
}
function escondeGerencial() {
	document.getElementById('gerencial').style.display = 'none';
}
function mostraCreditoCobranca() {
	document.getElementById('creditoCobranca').style.display = 'block';
}
function escondeCreditoCobranca() {
	document.getElementById('creditoCobranca').style.display = 'none';
}
function mostraContabilFiscal() {
	document.getElementById('contabilFiscal').style.display = 'block';
}
function escondeContabilFiscal() {
	document.getElementById('contabilFiscal').style.display = 'none';
}


function menuAdmin() {
    document.getElementById("admin").classList.toggle("show");
    if (document.getElementById("frenteLoja").classList.toggle("show")==true) {
    	document.getElementById("frenteLoja").classList.toggle("show");
    }
    if (document.getElementById("estoque").classList.toggle("show")==true){
    	document.getElementById("estoque").classList.toggle("show")
    }
    if (document.getElementById("frenteCaixa").classList.toggle("show")==true){
    	document.getElementById("frenteCaixa").classList.toggle("show")
    }
    if (document.getElementById("caixa").classList.toggle("show")==true) {
    	document.getElementById("caixa").classList.toggle("show")
    }
    if (document.getElementById("gerencial").classList.toggle("show")==true) {
    	document.getElementById("gerencial").classList.toggle("show")
    }
    if (document.getElementById("creditoCobranca").classList.toggle("show")==true) {
    	document.getElementById("creditoCobranca").classList.toggle("show")
    }
    if (document.getElementById("contabilFiscal").classList.toggle("show")==true) {
    	document.getElementById("contabilFiscal").classList.toggle("show")
    }
}

function menuFrenteLoja() {
    document.getElementById("frenteLoja").classList.toggle("show");
    if (document.getElementById("admin").classList.toggle("show")==true) {
    	document.getElementById("admin").classList.toggle("show");
    }
    if (document.getElementById("estoque").classList.toggle("show")==true){
    	document.getElementById("estoque").classList.toggle("show")
    }
    if (document.getElementById("frenteCaixa").classList.toggle("show")==true){
    	document.getElementById("frenteCaixa").classList.toggle("show")
    }
    if (document.getElementById("caixa").classList.toggle("show")==true) {
    	document.getElementById("caixa").classList.toggle("show")
    }
    if (document.getElementById("gerencial").classList.toggle("show")==true) {
    	document.getElementById("gerencial").classList.toggle("show")
    }
    if (document.getElementById("creditoCobranca").classList.toggle("show")==true) {
    	document.getElementById("creditoCobranca").classList.toggle("show")
    }
    if (document.getElementById("contabilFiscal").classList.toggle("show")==true) {
    	document.getElementById("contabilFiscal").classList.toggle("show")
    }
}

function menuEstoque() {
    document.getElementById("estoque").classList.toggle("show");
    if (document.getElementById("admin").classList.toggle("show")==true) {
    	document.getElementById("admin").classList.toggle("show");
    }
    if (document.getElementById("frenteLoja").classList.toggle("show")==true){
    	document.getElementById("frenteLoja").classList.toggle("show")
    }
    if (document.getElementById("frenteCaixa").classList.toggle("show")==true){
    	document.getElementById("frenteCaixa").classList.toggle("show")
    }
    if (document.getElementById("caixa").classList.toggle("show")==true) {
    	document.getElementById("caixa").classList.toggle("show")
    }
    if (document.getElementById("gerencial").classList.toggle("show")==true) {
    	document.getElementById("gerencial").classList.toggle("show")
    }
    if (document.getElementById("creditoCobranca").classList.toggle("show")==true) {
    	document.getElementById("creditoCobranca").classList.toggle("show")
    }
    if (document.getElementById("contabilFiscal").classList.toggle("show")==true) {
    	document.getElementById("contabilFiscal").classList.toggle("show")
    }

}

function menuFrenteCaixa() {
    document.getElementById("frenteCaixa").classList.toggle("show");
    if (document.getElementById("admin").classList.toggle("show")==true) {
    	document.getElementById("admin").classList.toggle("show");
    }
    if (document.getElementById("frenteLoja").classList.toggle("show")==true){
    	document.getElementById("frenteLoja").classList.toggle("show")
    }
    if (document.getElementById("estoque").classList.toggle("show")==true){
    	document.getElementById("estoque").classList.toggle("show")
    }
    if (document.getElementById("caixa").classList.toggle("show")==true) {
    	document.getElementById("caixa").classList.toggle("show")
    }
    if (document.getElementById("gerencial").classList.toggle("show")==true) {
    	document.getElementById("gerencial").classList.toggle("show")
    }
    if (document.getElementById("creditoCobranca").classList.toggle("show")==true) {
    	document.getElementById("creditoCobranca").classList.toggle("show")
    }
    if (document.getElementById("contabilFiscal").classList.toggle("show")==true) {
    	document.getElementById("contabilFiscal").classList.toggle("show")
    }
}

function menuCaixa() {
    document.getElementById("caixa").classList.toggle("show");
    if (document.getElementById("admin").classList.toggle("show")==true) {
    	document.getElementById("admin").classList.toggle("show");
    }
    if (document.getElementById("frenteLoja").classList.toggle("show")==true){
    	document.getElementById("frenteLoja").classList.toggle("show")
    }
    if (document.getElementById("estoque").classList.toggle("show")==true){
    	document.getElementById("estoque").classList.toggle("show")
    }
    if (document.getElementById("frenteCaixa").classList.toggle("show")==true) {
    	document.getElementById("frenteCaixa").classList.toggle("show")
    }
    if (document.getElementById("gerencial").classList.toggle("show")==true) {
    	document.getElementById("gerencial").classList.toggle("show")
    }
    if (document.getElementById("creditoCobranca").classList.toggle("show")==true) {
    	document.getElementById("creditoCobranca").classList.toggle("show")
    }
    if (document.getElementById("contabilFiscal").classList.toggle("show")==true) {
    	document.getElementById("contabilFiscal").classList.toggle("show")
    }
}

function menuGerencial() {
    document.getElementById("gerencial").classList.toggle("show");
    if (document.getElementById("admin").classList.toggle("show")==true) {
    	document.getElementById("admin").classList.toggle("show");
    }
    if (document.getElementById("frenteLoja").classList.toggle("show")==true){
    	document.getElementById("frenteLoja").classList.toggle("show")
    }
    if (document.getElementById("estoque").classList.toggle("show")==true){
    	document.getElementById("estoque").classList.toggle("show")
    }
    if (document.getElementById("frenteCaixa").classList.toggle("show")==true) {
    	document.getElementById("frenteCaixa").classList.toggle("show")
    }
    if (document.getElementById("caixa").classList.toggle("show")==true) {
    	document.getElementById("caixa").classList.toggle("show")
    }
    if (document.getElementById("creditoCobranca").classList.toggle("show")==true) {
    	document.getElementById("creditoCobranca").classList.toggle("show")
    }
    if (document.getElementById("contabilFiscal").classList.toggle("show")==true) {
    	document.getElementById("contabilFiscal").classList.toggle("show")
    }
}

function menuCreditoCobranca() {
    document.getElementById("creditoCobranca").classList.toggle("show");
    if (document.getElementById("admin").classList.toggle("show")==true) {
    	document.getElementById("admin").classList.toggle("show");
    }
    if (document.getElementById("frenteLoja").classList.toggle("show")==true){
    	document.getElementById("frenteLoja").classList.toggle("show")
    }
    if (document.getElementById("estoque").classList.toggle("show")==true){
    	document.getElementById("estoque").classList.toggle("show")
    }
    if (document.getElementById("frenteCaixa").classList.toggle("show")==true) {
    	document.getElementById("frenteCaixa").classList.toggle("show")
    }
    if (document.getElementById("caixa").classList.toggle("show")==true) {
    	document.getElementById("caixa").classList.toggle("show")
    }
    if (document.getElementById("gerencial").classList.toggle("show")==true) {
    	document.getElementById("gerencial").classList.toggle("show")
    }
    if (document.getElementById("contabilFiscal").classList.toggle("show")==true) {
    	document.getElementById("contabilFiscal").classList.toggle("show")
    }
}

function menuContabilFiscal() {
    document.getElementById("contabilFiscal").classList.toggle("show");
    if (document.getElementById("admin").classList.toggle("show")==true) {
    	document.getElementById("admin").classList.toggle("show");
    }
    if (document.getElementById("frenteLoja").classList.toggle("show")==true){
    	document.getElementById("frenteLoja").classList.toggle("show")
    }
    if (document.getElementById("estoque").classList.toggle("show")==true){
    	document.getElementById("estoque").classList.toggle("show")
    }
    if (document.getElementById("frenteCaixa").classList.toggle("show")==true) {
    	document.getElementById("frenteCaixa").classList.toggle("show")
    }
    if (document.getElementById("caixa").classList.toggle("show")==true) {
    	document.getElementById("caixa").classList.toggle("show")
    }
    if (document.getElementById("gerencial").classList.toggle("show")==true) {
    	document.getElementById("gerencial").classList.toggle("show")
    }
    if (document.getElementById("creditoCobranca").classList.toggle("show")==true) {
    	document.getElementById("creditoCobranca").classList.toggle("show")
    }
}

function menuSair() {
	if (document.getElementById("contabilFiscal").classList.toggle("show")==true) {
    	document.getElementById("contabilFiscal").classList.toggle("show");
    }
    
    if (document.getElementById("admin").classList.toggle("show")==true) {
    	document.getElementById("admin").classList.toggle("show");
    }
    if (document.getElementById("frenteLoja").classList.toggle("show")==true){
    	document.getElementById("frenteLoja").classList.toggle("show")
    }
    if (document.getElementById("estoque").classList.toggle("show")==true){
    	document.getElementById("estoque").classList.toggle("show")
    }
    if (document.getElementById("frenteCaixa").classList.toggle("show")==true) {
    	document.getElementById("frenteCaixa").classList.toggle("show")
    }
    if (document.getElementById("caixa").classList.toggle("show")==true) {
    	document.getElementById("caixa").classList.toggle("show")
    }
    if (document.getElementById("gerencial").classList.toggle("show")==true) {
    	document.getElementById("gerencial").classList.toggle("show")
    }
    if (document.getElementById("creditoCobranca").classList.toggle("show")==true) {
    	document.getElementById("creditoCobranca").classList.toggle("show")
    }
    closeNav();
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}