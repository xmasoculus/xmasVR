
var explosion : GameObject; 
var projectile2 : Rigidbody;
 
var x:Vector3;
var x1:Vector3;
var f:float=0;

function OnCollisionEnter( collision1 : Collision )
{
f=f+1;


projectile2.isKinematic=true;	
	var contact : ContactPoint = collision1.contacts[0];
	
   if (f==1)
   
  { var instantiatedExplosion : GameObject = Instantiate( explosion, transform.position, transform.rotation);

 instantiatedExplosion.transform.parent=collision1.contacts[0].otherCollider.transform;}

Destroy(gameObject );




}






