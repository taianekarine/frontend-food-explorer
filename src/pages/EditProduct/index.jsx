import { Container, CreateProductForm } from './style';
import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputValue } from '../../components/InputValue';
import { IngredientsItem } from '../../components/IngredientsItem';
import UploadIcon from '../../assets/upload.svg';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';


export const EditProduct = () => {
  const [ data, setData ] = useState(null);
  const [ title, setTitle ] = useState('');
  const [ categorie, setCategorie ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState([]);
  const [ description, setDescription ] = useState('');
  const [ image, setImage ] = useState(null);
  const [imageProductFilename, setImageProductFilename] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  const handleImageAdd = e => {
    const filename = e.target.files[0];
    setImage(filename);
    setImageProductFilename(filename.name);
  };

  const handleAddIngredient = () => {
    setIngredients( prevState => [...prevState, newIngredient] );
    setNewIngredient('');
  };

  const handleRemoveIngredient = ( deleted ) => {
    setIngredients( prevState => prevState.filter( ingredients => ingredients !== deleted));
  };

  const formatValue = ( productValue ) => {
    const valueNumber = productValue.replace(/[^0-9]/g, '');
    const decimalNumber = valueNumber.slice(-2);
    const wholeNumber = valueNumber.slice(0, -2);

    const formatedNumber =`R$ ${wholeNumber},${decimalNumber}`;

    return formatedNumber;
  }

  const handleChangeInputValue = ( e ) => {
    const newValue = e.target.value;
    const valueFormated = formatValue(newValue);

    setPrice(valueFormated);
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();

    if ( newIngredient ) {
      return alert('Você possui um ingredinte não adicionado, clique em + para adicionar ou deixe o campo vazio');
    }

    if ( !title || !categorie || !price || !description ) {
      return alert('Preencha todos os campos!')
    }

    const valueNumber = price.replace(/[^0-9]/g, '');
    const valueSent = (parseFloat(valueNumber) / 100).toFixed(2);

    console.log(valueSent);

    const formData = new FormData(); 
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', valueSent);
    formData.append('categorie', categorie);
    formData.append('ingredients', ingredients);

    await api.put(`/products/edit/${params.id}`, formData)

    alert('Produto editado com sucesso');
    navigate('/');
  }

  const handleDeleteProduct = async () => {
    const confirmDeleteProduct = window.confirm('Deseja realmente excluir o produto?')

    if ( confirmDeleteProduct ) {
      await api.delete(`/products/${ params.id }`)
      navigate('/')
    } 
  }

  useEffect( () => {
    const fetchProduct = async () => {
      const response = await api.get(`/products/${ params.id }`);

      setData(response.data);
      setIngredients(response.data.convertIngredients);
      console.log(response)
    }

    fetchProduct()

  },[]);

  return (
    <Container>
      <Header />
      {
        data && 
      <>
        <Return />
          <h1>Editar prato</h1>

          <CreateProductForm enctype={ 'multipart/form-data' } onSubmit={handleEditProduct}>
            <div className="row">
              <div className="column">
                <label htmlFor='file-upload'> Imagem do prato </label>

                <label htmlFor='file-upload' className='custom-file-upload'>
                  <i className='fas fa-cloud-upload-alt'> <img src={UploadIcon} alt='Icone para upload de imagens'/> </i> 
                  {imageProductFilename ? imageProductFilename : 'Adicione imagem para alterá-la'}
                </label>

              <input 
                name = { 'imageProductFilename' }
                id = { 'file-upload' }
                type = { 'file' }
                accept = { 'image/*' }
                onChange={ handleImageAdd } 
              />

              </div>

              <div className="column">
                <label htmlFor='name-product' className='label'>Nome</label>
                  <Input 
                  type = {'text'}
                  placeholder =  { data.product.title }
                  id = {'name-product'}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="column">
                <label htmlFor='category-product' className='label'> Categoria </label>
                <select name='category-product' id="category-product" onChange={ e => setCategorie( e.target.value )}>
                  <option value='' disabled > Selecione </option>
                  <option value='Refeições'> Refeições </option>
                  <option value='Sobremesas'> Sobremesas </option>
                  <option value='Bebidas'> Bebidas </option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="column">
                <label htmlFor='ingredients-product' className='label'> Ingredientes </label>

                <div className='Ingredients'>
                  <IngredientsItem 
                    isNew
                    placeholder = {'Adicionar'}
                    value = { newIngredient } 
                    onChange = { e => setNewIngredient( e.target.value ) }
                    onClick = { handleAddIngredient }
                  />

                {
                  ingredients && ingredients.map( (ingredient, index) => (
                    <IngredientsItem 
                      key = { String( index ) }
                      value = { ingredient }
                      onClick = { () => handleRemoveIngredient(ingredient) }
                    />
                  ))
                }

                </div>
              </div>

              <div className="column">
                <label htmlFor='price-product' className='label'> Preço </label>
                <InputValue
                  placeholder = { `R$ ${data.product.price}` }
                  id = { 'price-product' }
                  onChange = { handleChangeInputValue }
                />
              </div>
            </div>

            <label htmlFor='description-product' className='label'> Descrição </label>
            <textarea 
              name='description-product' 
              id='description-product' 
              placeholder={ data.product.description }
              onChange = { e => setDescription( e.target.value )}
            >
               
            </textarea>

            <div className="buttons">
              <Button 
                type = {'button'}
                title = {'Excluir prato'}
                className = {'delete'}
                onClick = { handleDeleteProduct }
              />

              <Button 
                type = {'submit'}
                title = {'Salvar alterações'}
                id = {'create'}
                className = {'save'}
              />
            </div>

          </CreateProductForm>

        <Footer />
      </>
      }
    </Container>
  )
}