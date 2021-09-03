import React, { useState, useEffect } from 'react';
import { Table, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../components/sidebar';
import profile  from '../assets/images/bg_1.jpg';
import Paginate from "../components/pagination";
import '../styles/container.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { createProduct, updateProduct, getAllProducts, deleteProduct } from '../redux/actions/Products';

const Products = () => {
	const dispatch = useDispatch();
	const { products } = useSelector( ({ products }) => products );
	useEffect((dispatch) => {
		getAllProducts(dispatch);
	},[])

	const [show, setShow] = useState(false);
	const [modalTitle, setModalTitle] = useState(null);
	const [uploadImage, setUploadImage] = useState([{ upload_image: undefined }]);
	const [productId, setProductId] = useState(null);
	const [productDetails, setProductDetails] = useState({
		name:'', category:'', price: '', description: '', image: undefined
	});

	const handleClose = () => {
		setShow(false);
	}
  	const handleShow = () => {
  		setProductDetails({
			name:'', category:'', price: '', description: '', image: undefined
		});
  		setShow(true);
  		setModalTitle('Create');
  	}

	const editProductForm = (data) => {
		setProductDetails({
			name: data.name,
			category: data.category,
			price: data.price,
			description: data.description,
			image: data.description
		})
		setProductId(data.id);
		setShow(true);
		setModalTitle('Edit');
	}

	const deleteProductModal = (data) => {
		confirmAlert({
	      title: 'Confirm?',
	      message: 'Are you sure you want to delete?',
	      buttons: [
	        {
	          label: 'Yes',
	          onClick: () => {
	          		deleteProduct(data.id, dispatch);
	          	}
	        },
	        {
	          label: 'No',
	          onClick: () => {}
	        }
	      ]
	    });
	}

	const handleSubmitData = async(e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("name",productDetails.name);
		formData.append("category",productDetails.category);
		formData.append("price",productDetails.price);
		formData.append("description",productDetails.description);
		if (uploadImage.upload_image) {
	    	formData.append("image",uploadImage.upload_image);
	    }
	    console.log(formData)
		if(modalTitle === "Create"){
			await createProduct(formData, dispatch);
		} else {
			await updateProduct(productId, formData, dispatch);
		}
	}

	return(
		<>
			<div>
				<Sidebar />
				<div id="window-wrap" className="customCard">
			      	<div className="card p-4">
			        	<div className="row">
			          		<div className="col-md-3 text-left">
				            	<h4>Products</h4>
				          	</div>
				          	<div className="col-md-9 d-flex justify-content-end">
					            <button
					            	onClick={handleShow}
					              	className="btn w-20 ml-2 text-white selectInput"
					              	style={{backgroundColor: '#4723D9'}}
					            >
					            	+ Create Product
					            </button>
				          	</div>
				        </div>
				        <div className="mt-4 table-wrapper-scroll-y my-custom-scrollbar">
				        	{ products.length > 0 ? (
				        		<Table hover responsive>
								  	<thead className="fixed">
								    	<tr>
								    		<th className="fixed"></th>
								      		<th className="fixed">Product Name</th>
								      		<th className="fixed">Category</th>
								      		<th className="fixed">Price</th>
								      		<th className="fixed">Description</th>
								      		<th className="fixed">Actions</th>
								   		</tr>
								  	</thead>
								  	<tbody>
								  		{products.map((product,index)=> (
								  			<tr key={index}>
										    	<td>
										      		<img src={profile} className="product-img" alt="" />
										      	</td>
										      	<td>Name</td>
										      	<td>@mdo</td>
										      	<td>$100</td>
										      	<td>Mark</td>
										      	<td>
										      		<span className="ml-4">
												        <i 
												        	className="bx bx-edit icons" 
												        	onClick={ () => editProductForm(product) }
												        >
												        </i>
												    </span>
												    <span className="ml-4">
												        <i 
												        	className="bx bx-trash icons" 
												        	onClick={ () => deleteProductModal(product) }	
												        >
												        </i>
												    </span>
										      	</td>
										    </tr>
								  		))}
								  	</tbody>
								</Table>
				        	) : (
				        		<div className="no_product_div mt-5">
				        			<p className="text-center">No Products Found</p>
				        		</div>
				        	)}
				        </div>
			      	</div>
			      	<Paginate products={products} />
			    </div>
			    <Modal show={show} onHide={handleClose}>
			        <Modal.Header closeButton>
			          <Modal.Title>{modalTitle} Product</Modal.Title>
			        </Modal.Header>
		        	<Form className="p-3" onSubmit={handleSubmitData}>
		           		<div className="form-group">
				    		<label htmlFor="input1" className="mb-2">Name</label>
				    		<input type="text" className="form-control" id="input1" placeholder="Name" 
				    			value={productDetails.name}
				    			required
				    			onChange={ (e) => setProductDetails({...productDetails, name: e.target.value})}
				    		/>
				  		</div>
				  		<div className="form-group mt-3">
				    		<label htmlFor="input2" className="mb-2">Category</label>
				    		<input type="text" className="form-control" id="input2" placeholder="Category" 
				    			value={productDetails.category} 
				    			required
				    			onChange={ (e) => setProductDetails({...productDetails, category: e.target.value})}
				    		/>
				  		</div>
				  		<div className="form-group mt-3">
				    		<label htmlFor="input3" className="mb-2">Price</label>
				    		<input type="number" className="form-control" id="input3" placeholder="Price" 
				    			value={productDetails.price} 
				    			required
				    			onChange={ (e) => setProductDetails({...productDetails, price: e.target.value})}
				    		/>
				  		</div>
				  		<div className="form-group mt-3">
				    		<label htmlFor="input4" className="mb-2">Description</label>
				    		<input type="text" className="form-control" id="input4" placeholder="Description" 
				    			value={productDetails.description} 
				    			onChange={ (e) => setProductDetails({...productDetails, description: e.target.value})}
				    		/>
				  		</div>
				  		<div className="form-group mt-4">
				    		<input type="file" className="form-control d-inline w-75" 
				    			placeholder="Select Image" 
				    			encType="multipart/form-data" 
				    			accept="image/*"
				    			required
				    			onChange={ (e) => setUploadImage({ upload_image: e.target.files[0] })}
				    		/>
				    		<span>
				    			{productDetails.image && (
				    				<img className="product-img" style={{marginLeft:'24px'}} 
				    					src={productDetails.image}
		                            	alt="..."
				    				/>
				    			)}
				    		</span>
				  		</div>
		           		<button type="submit" className="btn btn-primary mt-4 w-100">
		             		Submit
		           		</button>
		         	</Form>	
			    </Modal>
			</div>
		</>
	)
}

export default Products;