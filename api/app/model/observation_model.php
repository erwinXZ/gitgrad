<?php 

namespace App\Model;

use App\Lib\Response,
	App\Lib\Security;

/**
* Modelo usuario
*/
class  ObservationModel
{
	private $db;
	private $table = 'Observation';
	private $response;



	public function __CONSTRUCT($db, $db_mysqli){
		$this->db 		   = $db;
		$this->db_mysqli   = $db_mysqli;
		$this->response    = new Response();
		$this->security    = new Security();
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
	public function getObservation($id){

		return $data = $this->db->from($this->table, $id)
								->fetch();  						 
	}
	//registrar

	public function insert($data){
		// $data['password'] = md5($data['password']);
		// $data['password'] = $this->security->encriptar($data['password']);	

		//$this->db->insertInto($this->table, $data)
		//		 ->execute();
		$this->db_mysqli->prepare(" CALL insertObservation('".$data['_text']."',
													'".$data['_textstart']."',
													'".$data['_textend']."',
													'".$data['_description']."',
													'".$data['_npage']."',
													'".$data['_id_teacher']."',
													'".$data['_id_document']."')")
					  ->execute();

		return $this->response->setResponse(true);
		//  return $data = $this->db_pdo->query('select * from '.$this->table)
		//					 			->fetchAll();
		//call insertUser('Belen','Rodriguez Soliz','elenrodrigu@gmail.com','79302623','1',1,1,'2017-03-03 00:00:00',1);			 
	}

	public function readObservation($data){
		    $this->db_mysqli->multi_query(" CALL readObservation('".$data['id']."')");

			$res = $this->db_mysqli->store_result();
			    while ($fila = $res->fetch_assoc()) {
					$arreglo[] = $fila;
    			}
			mysqli_close($this->db_mysqli);
			return $arreglo;		 
	}

	


	//actualizar
	public function update($data, $id){

		// if (isset($data['password'])) {
		// 	$data['password'] = $this->security->encriptar($data['password']);	
		// }

		$this->db->update($this->table, $data, $id)	
				 ->execute();

		return $this->response->setResponse(true);		 
	}

	public function updateObservation($data){
		$this->db_mysqli->multi_query(" CALL updateObservation('".$data['_text']."',
															'".$data['_id_observation']."')");
		$res = $this->db_mysqli->store_result();
			$res = $res->fetch_assoc();
			mysqli_close($this->db_mysqli);
			return $res;						 
	}

	public function updateObservationStatus($data){
		$this->db_mysqli->multi_query(" CALL updateObservationStatus('".$data['_status']."',
															'".$data['_id_observation']."')");
			$res = $this->db_mysqli->store_result();
			$res = $res->fetch_assoc();
			mysqli_close($this->db_mysqli);
			return $res;					 
	}

	//eliminar
	public function delete($id){

		$this->db->deleteFrom($this->table, $id)	
				 ->execute();

		return $this->response->setResponse(true);		 
	}

}

 ?>