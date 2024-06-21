import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function AdminCategory()
{
  //create state array
  let [categories,setCategory] = useState([]);

  // use hook UseEffect 
  useEffect(() => {
      if(categories.length === 0)
      {
        //call api using fetch
        let apiAddress = "http://www.theeasylearnacademy.com/shop/ws/category.php";
        fetch(apiAddress)
          .then((response) => response.json())
          .then((data) => {
            console.log(data); //display json 
            let error = data[0]['error'];
            console.log(error);
            if (error !== 'no')
              alert(error);
            else {
              let total = data[1]['total'];
              if (total === 0)
                alert('no category found');
              else {
                data.splice(0, 2); //delete 1st two object from array
                setCategory(data);
              }
            }
          });
      }  
  });

	return(
		<div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
    {/* Menu */}
        <AdminMenu />
    {/* / Menu */}
    {/* Layout container */}
    <div className="layout-page">
      {/* Navbar */}
        <AdminHeader />
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card shadow">
            <div className="card-header bg-primary p-3 d-flex justify-content-between">
              <h4 className="text-white mb-0">Categories</h4>
              <Link to="/admin-add-category" className="btn btn-light">Add new category</Link>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="10%">id</th>
                      <th width="30%">Title</th>
                      <th width="30%">Photo</th>
                      <th width="5%">Is Live</th>
                      <th width="25%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((item)=>{
                      return (<tr>
                        <td>{item['id']}</td>
                        <td>{item['title']}</td>
                        <td>
                          <a className="example-image-link" href={"http://www.theeasylearnacademy.com/shop/images/category/" + item['photo']}data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                            <img src={"http://www.theeasylearnacademy.com/shop/images/category/" + item['photo']} className="img-fluid example-image" />
                          </a>
                        </td>
                        <td>{(item['islive']==='1'?'yes':'no')}</td>
                        <td>
                          <Link className="btn btn-dark" to="/admin-edit-category">Edit</Link>
                          <a className="btn btn-danger" href>Delete</a>
                        </td>
                      </tr>)
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="content-backdrop fade" />
      </div>
      {/* Content wrapper */}
    </div>
    {/* / Layout page */}
  </div>
  <div className="layout-overlay layout-menu-toggle" />
</div>
	);
}
