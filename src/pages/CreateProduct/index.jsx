import { Container, CreateProductForm } from './style';
import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputValue } from '../../components/InputValue';
import { IngredientsItem } from '../../components/IngredientsItem';
import UploadIcon from '../../assets/upload.svg';
import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export const CreateProduct = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = user.isAdmin;
  
  const [ image, setImage ] = useState(null);
  const [ title, setTitle ] = useState('');
  const [ categorie, setCategorie ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState('');
  const [ description, setDescription ] = useState('');
  const [imageProductFilename, setImageProductFilename] = useState('');

  const handleImageAdd = e => {
    const filename = e.target.files[0];
    setImage(filename);
    setImageProductFilename(filename.name);
  };
  
  const handleAddIngredient = () => {
    setIngredients( prevState => [...prevState, newIngredient] );
    setNewIngredient('');
  }

  const handleRemoveIngredient = ( deleted ) => {
    setIngredients( prevState => prevState.filter( ingredients => ingredients !== deleted))
  }

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

  const handleCreateNewProduct = async (e) => {
    e.preventDefault();

    if ( newIngredient ) {
      return alert('Você possui um ingredinte não adicionado, clique em + para adicionar ou deixe o campo vazio');
    }

    if ( !image ) {
      return alert('Insira uma imagem');
    }

    if ( !title || !categorie || !price || !ingredients || !description ) {
      return alert('Preencha todos os campos!')
    }

    const valueNumber = price.replace(/[^0-9]/g, '');
    const valueSent = (parseInt(valueNumber) / 100).toFixed(2);

    const formData = new FormData(); 
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', valueSent);
    formData.append('categorie', categorie);
    formData.append('ingredients', ingredients);

    await api.post('/products/create', formData )

    alert('Produto criado com sucesso');
    navigate('/');
  }

  return (
    <Container>
      <Header isAdmin = {isAdmin} />
      <Return />
        <h1>Adicionar prato</h1>

        <CreateProductForm enctype={ 'multipart/form-data' } >
          <div className="row"> {/* FILE */}
            <div className="column">
              <label htmlFor='file-upload'> Imagem do prato </label>
              <label htmlFor='file-upload' className='custom-file-upload'>
                <i className='fas fa-cloud-upload-alt'> <img src={UploadIcon} alt='Icone para upload de imagens'/> </i> 
                {imageProductFilename ? imageProductFilename : 'Selecione uma imagem'}
              </label>
              <input 
                name = {'imageProductFilename'}
                id = {'file-upload'}
                type = {'file'}
                accept='image/*'
                onChange={handleImageAdd} 
              />
            </div>

            <div className="column"> {/* NAME */}
              <label htmlFor='name-product' className='label'>Nome</label>
              <Input 
                type = {'text'}
                placeholder =  {'Ex.: Salada César'}
                id = {'name-product'}
                onChange = { e => setTitle( e.target.value )}
              />
            </div>

            <div className="column"> {/* CATEGORIE */}
              <label htmlFor='category-product' className='label'> Categoria </label>
              <select 
                name = 'category-product' 
                id = "category-product"
                value = { categorie }
                onChange = { e => setCategorie( e.target.value )}
              >
                <option value='' disabled > Selecione </option>
                  <option value='Refeições'> Refeições </option>
                  <option value='Sobremesas'> Sobremesas </option>
                  <option value='Bebidas'> Bebidas </option>
              </select>
            </div>
          </div>

          <div className="row"> 
            <div className="column"> {/* INGREDIENT */}
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
                  ingredients.map( (ingredient, index) => (
                    <IngredientsItem 
                      key = { String(index) }
                      value = { ingredient } 
                      onClick = { () => handleRemoveIngredient(ingredient) }
                    />
                  ))
                }

              </div>
            </div>

            <div className="column"> {/* PRICE */}
              <label htmlFor='price-product' className='label'> Preço </label>
              <InputValue 
                placeholder = {'R$ 00,00'}
                id = {'price-product'}
                type = {'texting'}
                onChange = { handleChangeInputValue }
              />

            </div>

          </div>
          {/* DESCRIPTION */}
          <label htmlFor='description-product' className='label'> Descrição </label>
          <textarea 
            name = {'description-product'} 
            id = {'description-product'} 
            placeholder = {'Fale brevemente sobre o prato, seus ingredientes e composição'}
            onChange = { e => setDescription( e.target.value )}
          >
              
          </textarea>

            <Button 
              type = {'submit'}
              title = {'Salvar prato'}
              id = {'create'}
              className = {'save'}
              onClick = { handleCreateNewProduct }
            />

        </CreateProductForm>

      <Footer />
    </Container>
  )
}