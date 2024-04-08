evercool-ifc-2024
=================
- **https://github.com/dirkarnez/web-ifc-three-model-creation**
- https://thatopen.github.io/engine_web-ifc/demo/
  - ```js
    let data= ifcAPI.SaveModel(model);
    let d = new TextDecoder().decode(data);
    debugger;
    ```
- https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/ifchvacdomain/content.html
### Notes
- use IFCX4 with **IFCPOLYGONALFACESET**
  - ```
    IFCINDEXEDPOLYGONALFACE
    IFCCARTESIANPOINTLIST3D
    IFCPOLYGONALFACESET
    IFCGEOMETRICREPRESENTATIONSUBCONTEXT
    IFCSHAPEREPRESENTATION
    IFCAXIS2PLACEMENT3D
    IFCREPRESENTATIONMAP()
    IFCMAPPEDITEM
    IFCPRODUCTDEFINITIONSHAPE
    IFCLOCALPLACEMENT
    IfcProductRepresentation? should us, i don't know,looks helpful
    ```
### Obj
- **https://blog.csdn.net/xiongzai2016/article/details/108052800**
### References
- https://github.com/dirkarnez/ifcopenshell-pyodide
  - the version is too old... Does not support adding mesh
- https://blenderbim.org/docs-python/ifcopenshell-python/geometry_creation.html
- https://blenderbim.org/docs-python/ifcopenshell-python/geometry_processing.html
- https://blenderbim.org/docs-python/ifcopenshell-python/code_examples.html
- https://blenderbim.org/docs-python/ifcopenshell-python/geometry_creation.html#mesh-representations
- https://community.osarch.org/discussion/1092/ifcopenshell-python-how-to-convert-many-obj-files-to-an-ifc-file
- https://community.osarch.org/discussion/1074/ifcopenshell-python-from-obj-file-to-ifc-file
- https://github.com/Martin15135215/git_ifc_test/blob/main/obj2ifc_meshlab_ifc4.py
- https://github.com/Martin15135215/git_ifc_test/blob/main/obj2ifc4.py
- https://github.com/Martin15135215/git_ifc_test
- https://github.com/Martin15135215/git_ifc_test/blob/main/testface.obj
- https://blenderbim.org/docs-python/ifcopenshell-python/hello_world.html

### Extra
- [Python HVAC – Python applied to HVAC](https://pythoncvc.net/?lang=en)
- https://standards.buildingsmart.org/IFC/RELEASE/IFC4_3/HTML/ifchvacdomain/content.html
- https://jpatacas.github.io/ifcjs-viewer/index.html
- http://www.bimant.com/docs/ifcjs/IfcLoader.getPropertySets/
- https://github.com/ThatOpen/engine_web-ifc/blob/main/src/ts/helpers/properties.ts
- https://anweshgangula.github.io/Basic-Forge/
- https://aps.autodesk.com/blog/publicly-share-models-customized-viewer

### Example
- https://github.com/buildingsmart-community/ifcJSON/blob/6d9b961e343e329f29c007b92f58af2fa8d0bc40/Samples/IFC_4.0/BuildingSMARTSpec/air-terminal-library-object_roundtrip.ifc#L35
- https://github.com/GeometryGym/GeometryGymIFC/blob/b93a6cf2a7f1fe5b6b4d231b247cd185df7cf85b/Core/IFC/Property%20Sets.cs#L139
- https://github.com/AlanRynne/ifc-developer-tools/blob/f45efabe5890042435675c009fc66863ae8b8619/examples/ifc/ifcKit/building-service-element/air-terminal-element.ifc#L53
- https://github.com/EnEff-BIM/EnEffBIM_UseCases/blob/6bf3b0c347c9327ec4e3d6bb9d228f79ad116399/BIM/4.2%20AHUcooling_VDI6020/IFC/4.2%20AHUcooling.ifc#L2102
- https://github.com/BenzclyZhang/IFC-RDF-Convertor_Validator/blob/91fb09644ac4178011c85789763454a505f99626/bin/IFC_roundtrip/air-terminal-element.ifc.ifc#L42
- https://github.com/mrozmanith/IFC_for_Revit/blob/02ceb77198b8d20fe5901c4ed8e495eec27a9c24/2014Revit.IFC/Source/Revit.IFC.Export/Exporter/ExporterInitializer.cs#L877
- https://github.com/giobel/GeometryGymIFC-Examples/tree/master
- https://standards.buildingsmart.org/IFC/RELEASE/IFC4/ADD1/HTML/schema/ifchvacdomain/lexical/.htm
- https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/Pset_CoilTypeCommon.htm
- https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/ifchvacdomain/content.html
