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
