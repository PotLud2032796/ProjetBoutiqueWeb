import { Form,useLoaderData } from "react-router-dom";

function EditProduct(props) {
    const {results} = useLoaderData();

    console.log(results);

    return (
        <div>
            <Form action="/processEdit" class="mt-3 form-size mx-auto" method="post">
                <div class="row mb-3 form-layout py-2">
                    <label for="nom" class="col-sm-2 col-form-label">Nom:</label>
                    <div class="col-sm-10 d-flex justify-content-center">
                        <input type="text" class="input-layout" id="nom" name="nom" defaultValue={results.nom} required />
                    </div>
                </div>
                <div class="row mb-3 form-layout py-2">
                    <label for="details" class="col-sm-2 col-form-label">Description:</label>
                    <div class="col-sm-10 d-flex justify-content-center">
                        <input type="text" class="input-layout" id="description" name="description" defaultValue={results.details} required />
                    </div>
                </div>
                <div class="row mb-3 form-layout py-2">
                    <label for="imagesrc" class="col-sm-2 col-form-label">Lien image:</label>
                    <div class="col-sm-10 d-flex justify-content-center">
                        <input type="text" class="input-layout" id="imageSrc" name="imageSrc" defaultValue={results.imageSrc} required />
                    </div>
                </div>
                <div class="row mb-3 form-layout py-2">
                    <label for="prix" class="col-sm-2 col-form-label">Prix:</label>
                    <div class="col-sm-10 d-flex justify-content-center">
                        <input type="text" class="input-layout" id="prix" name="prix" defaultValue={results.prix} required />
                    </div>
                </div>
                <div class="row mb-3 form-layout py-2">
                    <label for="stock" class="col-sm-2 col-form-label">Stock:</label>
                    <div class="col-sm-10 d-flex justify-content-center">
                        <input type="text" class="input-layout" id="stock" name="stock" defaultValue={results.stock} required />
                    </div>
                 </div>
                 <input type="hidden" value={results.id} id="idProduct" name="idProduct"/>
                 <input type="hidden" value={results.disponible} id="disponible" name="disponible"/>
                <div class="text-center">
                    <input type="submit" class="buttonForm px-3 py-1" value="Soumettre" />
                </div>
            </Form>
        </div>
            )
  }


  export default EditProduct;