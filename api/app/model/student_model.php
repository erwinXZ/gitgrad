<?php 

namespace App\Model;

use App\Lib\Response,
	App\Lib\Security;

/**
* Modelo usuario
*/
class  StudentModel
{
	private $db;
	private $table = 'Student';
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
	public function getStudent($id){

		return $data = $this->db->from($this->table, $id)
								->fetch();  						 
	}
	//registrar

	public function insertStudent($data){
		// $data['password'] = md5($data['password']);
		// $data['password'] = $this->security->encriptar($data['password']);	

		//$this->db->insertInto($this->table, $data)
		//		 ->execute();
		$this->db_pdo->multi_query(" CALL insertStudent('".$data['_name']."',
													'".$data['_last_name']."',
													'".$data['_email']."',
													'".$data['_password']."',
													'".$data['_cellphone']."',
													'".$data['_cu']."',
													'".$data['_college_carrer']."')");
		$res = $this->db_pdo->store_result();
		$res = $res->fetch_array();
		mysqli_close($this->db_pdo);
		$res = array("message"=>$res[0],"response"=>true);
		return $res;	
	}

	public function listProjectStudent($data){

		//$this->db->insertInto($this->table, $data)
		//		 ->execute();
		$this->db_pdo->multi_query(" CALL listProjectStudent(".$data.")");
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