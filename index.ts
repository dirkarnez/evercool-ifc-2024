
    interface pt {
        x: number, y: number, z: number;
    }

    interface BIMElement {
        ifcEntity any
    }

    interface IFCExportable {
        WriteToIFCModel(): string
    }

    interface Element extends BIMElement, IFCExportable {

    }

    class Location extends Element {
        constructor(model, posX: number, posY: number, posZ: number) {
            this.ifcEntity = ifcAPI.CreateIfcEntity(model, IFCCARTESIANPOINT, [ifcAPI.CreateIfcType(model,IFCLENGTHMEASURE,pos.x), ifcAPI.CreateIfcType(model,IFCLENGTHMEASURE,pos.y),ifcAPI.CreateIfcType(model,IFCLENGTHMEASURE,pos.z)]);
        }
    }


    class Placement extends Element {
        /*
        IfcAxis2Placement3D's super class is IfcPlacement
        */
        constructor(model, location: Location, axis:?Axis, refDirection:?RefDirection) Placement {
            this.ifcEntity = ifcAPI.CreateIfcEntity(model, IFCAXIS2PLACEMENT3D, location.ifcEntity, null, null);
        }
    }



    const gridSize = 6;

    let dir: pt =  { x: 0, y: 0, z: 1 };
    let rad: number = 0.25;
    let len: number = 2;
    let direction = ifcAPI.CreateIfcEntity(model,IFCDIRECTION, [ifcAPI.CreateIfcType(model,IFCREAL,dir.x), ifcAPI.CreateIfcType(model,IFCREAL,dir.y), ifcAPI.CreateIfcType(model,IFCREAL,dir.z)]);
    let profileLocation = ifcAPI.CreateIfcEntity(model,IFCCARTESIANPOINT, [ifcAPI.CreateIfcType(model,IFCLENGTHMEASURE,0), ifcAPI.CreateIfcType(model,IFCLENGTHMEASURE,0)]);
    let profileAxis = ifcAPI.CreateIfcEntity(model,IFCAXIS2PLACEMENT2D, profileLocation, null);
    let profile =  ifcAPI.CreateIfcEntity(model, IFCCIRCLEPROFILEDEF, IFC4.IfcProfileTypeEnum.AREA, ifcAPI.CreateIfcType(model,IFCLABEL,'column-prefab'), profileAxis, ifcAPI.CreateIfcType(model,IFCPOSITIVELENGTHMEASURE,rad));   

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
        
            let pos:pt = {x: i, y: j, z: 0};
       



            let solid = ifcAPI.CreateIfcEntity(model, IFCEXTRUDEDAREASOLID, profile, placement, direction, ifcAPI.CreateIfcType(model,IFCPOSITIVELENGTHMEASURE,len));

            let column = ifcAPI.CreateIfcEntity(model,IFCCOLUMN, ifcAPI.CreateIfcType(model, IFCGLOBALLYUNIQUEID,"GUID"), null,ifcAPI.CreateIfcType(model,IFCLABEL,"name"),null, ifcAPI.CreateIfcType(model,IFCLABEL,"label"),  placement, solid,ifcAPI.CreateIfcType(model,IFCIDENTIFIER,"sadf"), null);

            ifcAPI.WriteLine(model, column);
        }
    }





// ---------
function CreateFace() : Face {
    IfcIndexedPolygonalFace(3 unsigned integers)
}

CreateFaceSet(faces: Face[]): FaceSet {
IfcPolygonalFaceSet(Coordinates, isClosed or omitted with $, faces, just $);
}

IFCSHAPEREPRESENTATION(IFCGEOMETRICREPRESENTATIONSUBCONTEXT which is model_view, 'Body','SweptSolid', IfcRepresentationItem which is FaceSet)

IFCPRODUCTDEFINITIONSHAPE($,$,(IFCSHAPEREPRESENTATION));

the IFCPRODUCTDEFINITIONSHAPE will be assigned with (HVAC)domain name , with IFCLOCALPLACEMENT, CreatePlacement(CreateLocation(posX: number, posY: number, posZ: number), $, $)

https://www.cnblogs.com/plus301/p/16624107.html for coloring

function a(...elements: Element[]) {
    elements.forEach(element => element.WriteToIFCModel())
}
