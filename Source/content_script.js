walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\biPhone\b/g, "Speak-n-Spell");
	v = v.replace(/\biphone\b/g, "speak-n-spell");
	v = v.replace(/\bIPhone\b/g, "Speak-N-Spell");
	v = v.replace(/\bIPHONE\b/g, "SPEAK-N-SPELL");
	
	textNode.nodeValue = v;
}


