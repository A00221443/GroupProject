#pragma strict
var depth : float = 30.0;

function Update () 
{   
	
}

function OnMouseDrag()
{
	var mousePos = Input.mousePosition;
 	var wantedPos = Camera.main.ScreenToWorldPoint (Vector3 (mousePos.x, mousePos.y, depth));
 	transform.position = wantedPos;
}

function OnMouseUp ()
{
	transform.position.x = Mathf.Round(transform.position.x);
	transform.position.z = Mathf.Round(transform.position.z);
	transform.position.y = 1.0;
}