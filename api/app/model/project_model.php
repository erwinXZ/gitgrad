<?php 

namespace App\Model;

use App\Lib\Response,
	App\Lib\Security;

/**
* Modelo usuario
*/
class  ProjectModel
{
	private $db;
	private $table = 'Project';
	private $response;



	public function __CONSTRUCT($db, $db_pdo){
		$this->db 		= $db;
		$this->db_pdo   = $db_pdo;
		$this->response = new Response();
		$this->security = new Security();
	}

	//var $l => 'limit', $p => 'pagina'

	//lista_total
	public function listar(){

		return $data = $this->db->from($this->table)
						 ->orderBy('id DESC')
						 ->fetchAll();
	//  return $data = $this->db_pdo->query('select * from '.$this->table)
	//					 			->fetchAll();				   						 
	}

	//listar paginado
	//parametros de limite, pagina
	public function paginated($l, $p){	
		$p = $p*$l;
		$data = $this->db->from($this->table)
						 ->limit($l)
						 ->offset($p)
						 ->orderBy('id desc')
						 ->fetchAll();

		$total = $this->db->from($this->table)
						  ->select('COUNT(*) Total')
						  ->fetch()
						  ->Total;

		return [
			'data'	=>   $data,
			'total' =>   $total

		];				  						 
	}
	//obtener
	public function getProject($id){

		return $data = $this->db->from($this->table, $id)
								->fetch();  						 
	}
	//registrar

	public function insert($data){
		//$this->db->insertInto($this->table, $data)
		//		 ->execute();
		$this->db_pdo->multi_query(" CALL insertProject('".$data['_name']."',
													'".$data['_modality']."',
													'".$data['_gestion']."',
													'".$data['_cu']."',
													'".$data['_id_teacher']."')");
		$res = $this->db_pdo->store_result();
			$res = $res->fetch_array();
			mysqli_close($this->db_pdo);
			$res = array("message"=>$res[0],"response"=>true);
			return $res;					 
	}

	public function transfer($data){
		//$this->db->insertInto($this->table, $data)
		//		 ->execute();
		$this->db_pdo->multi_query(" CALL transfer('".$data['_email_student']."',
													'".$data['_email_teacher']."',
													'".$data['_id_teacher']."')");
		$res = $this->db_pdo->store_result();
			$res = $res->fetch_array();
			mysqli_close($this->db_pdo);
			$res = array("message"=>$res[0],"response"=>true);
			return $res;					 
	}

	

	public function projectsList($data){

			$this->db_pdo->multi_query(" CALL listarProject(".$data.")");
			$res = $this->db_pdo->store_result();
			    while ($fila = $res->fetch_assoc()) {
					$arreglo[] = $fila;
    			}
			mysqli_close($this->db_pdo);
			return $arreglo;	
			
	}

	public function projectsListStudent($data){

			$this->db_pdo->multi_query(" CALL listarProjectStudent(".$data.")");
			$res = $this->db_pdo->store_result();
			    while ($fila = $res->fetch_assoc()) {
					$arreglo[] = $fila;
    			}
			mysqli_close($this->db_pdo);
			return $arreglo;	
			
	}
	//actualizar
	public function update($data, $id){

		if (isset($data['password'])) {
			$data['password'] = $this->security->encriptar($data['password']);	
		}

		$this->db->update($this->table, $data, $id)	
				 ->execute();

		return $this->response->setResponse(true);		 
	}
	//eliminar
	public function delete($id){

		$this->db->deleteFrom($this->table, $id)	
				 ->execute();

		return $this->response->setResponse(true);		 
	}

}

 ?>