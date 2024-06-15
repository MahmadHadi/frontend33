export default function AdminAddProduct() {
    return (<div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
            {/* Menu */}
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className="app-brand demo">
                    <a href="index.html" className="app-brand-link">
                        <span className="app-brand-logo demo">
                            <img src="../assets/img/logo.png" alt />
                        </span>
                        <span className="app-brand-text demo menu-text fw-bolder ms-2">Online shop</span>
                    </a>
                    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i className="bx bx-chevron-left bx-sm align-middle" />
                    </a>
                </div>
                <div className="menu-inner-shadow" />
                <ul className="menu-inner py-1">
                    {/* Dashboard */}
                    <li className="menu-item">
                        <a href="admin-dashboard.html" className="menu-link border shadow-sm">
                            <i className="bx bxs-tachometer" /> Dashboard
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="admin-category.html" className="menu-link border shadow-sm">
                            <i className="bx bxs-purchase-tag-alt" /> Categories
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="admin-product.html" className="menu-link border shadow-sm">
                            <i className="bx bxs-box" /> Products
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="admin-orders.html" className="menu-link border shadow-sm">
                            <i className="bx bxs-cart" /> Orders
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="admin-users.html" className="menu-link border shadow-sm">
                            <i className="bx bxs-user" /> Customers
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="admin-change-password.html" className="menu-link border shadow-sm">
                            <i className="bx bxs-lock" /> Change password
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#" className="menu-link border shadow-sm">
                            <i className="bx bxs-exit" /> Logout
                        </a>
                    </li>
                </ul>
            </aside>
            {/* / Menu */}
            {/* Layout container */}
            <div className="layout-page">
                {/* Navbar */}
                <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                    <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                        <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                            <i className="bx bx-menu bx-sm" />
                        </a>
                    </div>
                    <div className="navbar-nav-right" id="navbar-collapse">
                        <h4 className="my-2">Product management</h4>
                    </div>
                </nav>
                {/* / Navbar */}
                {/* Content wrapper */}
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="card shadow">
                            <div className="card-header bg-primary p-3 d-flex justify-content-between">
                                <h4 className="text-white mb-0">Add new product</h4>
                                <a href="admin-product.html" className="btn btn-light">back</a>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row mb-3 mt-3">
                                        {/* Category */}
                                        <div className="col-md-4">
                                            <label htmlFor="category" className="form-label">Category</label>
                                            <select id="category" className="form-select" required>
                                                <option value>Select Category</option>
                                                <option value={1}>Category 1</option>
                                                <option value={2}>Category 2</option>
                                                <option value={3}>Category 3</option>
                                            </select>
                                        </div>
                                        {/* Title */}
                                        <div className="col-md-4">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="title" required />
                                        </div>
                                        {/* Photo */}
                                        <div className="col-md-4">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            <input type="file" className="form-control" id="photo" accept="image/*" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        {/* Price */}
                                        <div className="col-md-3">
                                            <label htmlFor="price" className="form-label">Price</label>
                                            <input type="number" className="form-control" id="price" required />
                                        </div>
                                        {/* Stock */}
                                        <div className="col-md-3">
                                            <label htmlFor="stock" className="form-label">Stock</label>
                                            <input type="number" className="form-control" id="stock" required />
                                        </div>
                                        {/* Weight */}
                                        <div className="col-md-3">
                                            <label htmlFor="weight" className="form-label">Weight</label>
                                            <input type="text" className="form-control" id="weight" required />
                                        </div>
                                        {/* Size */}
                                        <div className="col-md-3">
                                            <label htmlFor="size" className="form-label">Size</label>
                                            <input type="text" className="form-control" id="size" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        {/* Is Live */}
                                        <div className="col-md-3">
                                            <label className="form-label">Is Live</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="islive" id="liveYes" defaultValue="yes" required />
                                                <label className="form-check-label" htmlFor="liveYes">Yes</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="islive" id="liveNo" defaultValue="no" required />
                                                <label className="form-check-label" htmlFor="liveNo">No</label>
                                            </div>
                                        </div>
                                        {/* Detail */}
                                        <div className="col-md-9">
                                            <label htmlFor="detail" className="form-label">Detail</label>
                                            <textarea className="form-control" id="detail" rows={3} required defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12 text-end">
                                            <button type="submit" className="btn btn-primary">Save</button>
                                            <button type="reset" className="btn btn-dark">Clear all</button>
                                        </div>
                                    </div>
                                </form>
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