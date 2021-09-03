import Pagination from "react-bootstrap-4-pagination";
import '../styles/container.css';

const Paginate = (props) => {
	let total_pages = 0;
	if(props.products.length > 0)
		total_pages = Math.ceil(props.products.length / 10);
	else
		total_pages = 0;

	let mdSize = {
	  	totalPages: total_pages,
	  	currentPage: 1,
	  	showMax: 5,
	  	threeDots: true,
	  	prevNext: true,
	  	onClick: function(page) {
	   
	  	}
	};

	return(
		<>
			{props.products.length > 0 && (
				<div className="row mt-4">
		      		<div className="col ml-4">
		            </div>
		  			<div className="col d-flex justify-content-end">
		  				<Pagination {...mdSize} />
		  			</div>
				</div>
			)}
		</>
	)
}

export default Paginate;