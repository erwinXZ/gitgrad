<?php 

namespace App\Model;

use App\Lib\Response,
	App\Lib\Security;

/**
* Modelo usuario
*/
class  ClientModel
{
	private $db;
	private $table = 'Client';
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
	public function getClient($id){

		return $data = $this->db->from($this->table, $id)
								->fetch();  						 
	}
	//registrar

	public function insert($data){

		$this->db_pdo->multi_query(" CALL insertClient('".$data['_name']."',
													'".$data['_last_name']."',
													'".$data['_email']."',
													'".$data['_password']."',
													'".$data['_cellphone']."')");
			$res = $this->db_pdo->store_result();
			$res = $res->fetch_array();
			mysqli_close($this->db_pdo);
			$res = array("message"=>$res[0],"response"=>true);
			return $res;			 
	}

	public function signIn($data){
		// $data['password'] = md5($data['password']);

		//$this->db->insertInto($this->table, $data)
		//		 ->execute();
		$this->db_pdo->multi_query(" CALL signIn('".$data['_email']."',
												'".$data['_password']."')");
		$res = $this->db_pdo->store_result();
			$res = $res->fetch_assoc();
			mysqli_close($this->db_pdo);
			$res = array("mesagge"=>$res);
			$res["response"]=true;
			return $res;																 
	}
	//actualizar
	public function update($data, $id){

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