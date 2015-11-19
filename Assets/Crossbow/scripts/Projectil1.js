
var explosion : GameObject; 


function OnCollisionEnter( other : Collision )
{

 if ((other.contacts[0].otherCollider.name!="Cube")&&(other.contacts[0].otherCollider.name!="Terrain")&&(other.gameObject.layer==10)){
	
	var contact : ContactPoint = other.contacts[0];
	var rotation = Quaternion.FromToRotation( Vector3.up, contact.normal ); 


var instantiatedExplosion : GameObject = Instantiate( explosion, other.transform.localPosition, other.transform.localRotation);


instantiatedExplosion.transform.parent=gameObject.transform;



}

}





