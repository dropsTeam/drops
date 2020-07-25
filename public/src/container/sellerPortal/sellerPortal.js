import React from 'react';

class SellerPortal extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-6">
                            <h4 className="page-title">{'Dashboard'}</h4>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">{'Dashboard'}</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-6">
                            <div className="text-right">
                                <small>Users</small>
                                <h5 className="text-info">3,458</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-12 col-lg-4">
                            <div className="card card-hover">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="mr-4">
                                            <small>Wallet Balance</small>
                                            <h4 className="mb-0">$3,567.53</h4>
                                        </div>
                                        <div className="chart ml-auto">
                                            asdfadf
                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4">
                            <div className="card card-hover bg-red">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="mr-4">
                                            <small>Wallet Balance</small>
                                            <h4 className="mb-0">$3,567.53</h4>
                                        </div>
                                        <div className="chart ml-auto">
                                            asdfadf
                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-4">
                            <div className="card card-hover bg-green">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="mr-4">
                                            <small>Wallet Balance</small>
                                            <h4 className="mb-0">$3,567.53</h4>
                                        </div>
                                        <div className="chart ml-auto">
                                            asdfadf
                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">

                                    <div className="d-md-flex align-items-center">
                                        <div>
                                            <h4 className="card-title">Top Selling Products</h4>
                                            <p className="card-subtitle">Overview of Top Selling Items</p>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="dl">
                                                <select className="custom-select">
                                                    <option value="0" selected="">Monthly</option>
                                                    <option value="1">Daily</option>
                                                    <option value="2">Weekly</option>
                                                    <option value="3">Yearly</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="table-responsive">
                                    <table className="table v-middle">
                                        <thead>
                                            <tr className="bg-light">
                                                <th className="border-top-0">Products</th>
                                                <th className="border-top-0">License</th>
                                                <th className="border-top-0">Support Agent</th>
                                                <th className="border-top-0">Technology</th>
                                                <th className="border-top-0">Tickets</th>
                                                <th className="border-top-0">Sales</th>
                                                <th className="border-top-0">Earnings</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m-r-10"><a className="btn btn-circle btn-info text-white">EA</a></div>
                                                        <div className="">
                                                            <h4 className="m-b-0 font-16">Elite Admin</h4>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Single Use</td>
                                                <td>John Doe</td>
                                                <td>
                                                    <label className="label label-danger">Angular</label>
                                                </td>
                                                <td>46</td>
                                                <td>356</td>
                                                <td>
                                                    <h5 className="m-b-0">$2850.06</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m-r-10"><a className="btn btn-circle btn-warning text-white">MA</a></div>
                                                        <div className="">
                                                            <h4 className="m-b-0 font-16">Monster Admin</h4>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Single Use</td>
                                                <td>Venessa Fern</td>
                                                <td>
                                                    <label className="label label-info">Vue Js</label>
                                                </td>
                                                <td>46</td>
                                                <td>356</td>
                                                <td>
                                                    <h5 className="m-b-0">$2850.06</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m-r-10"><a className="btn btn-circle btn-success text-white">MP</a></div>
                                                        <div className="">
                                                            <h4 className="m-b-0 font-16">Material Pro Admin</h4>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Single Use</td>
                                                <td>John Doe</td>
                                                <td>
                                                    <label className="label label-success">Bootstrap</label>
                                                </td>
                                                <td>46</td>
                                                <td>356</td>
                                                <td>
                                                    <h5 className="m-b-0">$2850.06</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="m-r-10"><a className="btn btn-circle btn-primary text-white">AA</a></div>
                                                        <div className="">
                                                            <h4 className="m-b-0 font-16">Ample Admin</h4>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Single Use</td>
                                                <td>John Doe</td>
                                                <td>
                                                    <label className="label label-purple">React</label>
                                                </td>
                                                <td>46</td>
                                                <td>356</td>
                                                <td>
                                                    <h5 className="m-b-0">$2850.06</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="card card-hover">
                                <div className="card-body">
                                    <h4 className="card-title">Recent Comments</h4>
                                    <table className="table table-striped table-hover table-borderless table-vcenter font-size-sm">
                                        <thead>
                                            <tr className="text-uppercase">
                                                <th className="font-w700">Product</th>
                                                <th className="d-none d-sm-table-cell font-w700">Date</th>
                                                <th className="font-w700">State</th>
                                                <th className="d-none d-sm-table-cell font-w700 text-right" style="width: 120px;">Price</th>
                                                <th className="font-w700 text-center" style="width: 60px;"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">iPhone X</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">today</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-warning">Pending..</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $999,99
                                </td>
                                                <td className="text-center">
                                                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="" className="js-tooltip-enabled" data-original-title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">MacBook Pro 15"</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">today</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-warning">Pending..</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $2.299,00
                                </td>
                                                <td className="text-center">
                                                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="" className="js-tooltip-enabled" data-original-title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">Nvidia GTX 1080 Ti</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">today</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-warning">Pending..</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $1200,00
                                </td>
                                                <td className="text-center">
                                                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="" className="js-tooltip-enabled" data-original-title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">Playstation 4 Pro</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">today</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-danger">Cancelled</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $399,00
                                </td>
                                                <td className="text-center">
                                                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="" className="js-tooltip-enabled" data-original-title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">Nintendo Switch</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">yesterday</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-success">Completed</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $349,00
                                </td>
                                                <td className="text-center">
                                                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="" className="js-tooltip-enabled" data-original-title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">iPhone X</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">yesterday</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-success">Completed</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $999,00
                                </td>
                                                <td className="text-center">
                                                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="" className="js-tooltip-enabled" data-original-title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">Echo Dot</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">yesterday</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-success">Completed</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $39,99
                                </td>
                                                <td className="text-center">
                                                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="" className="js-tooltip-enabled" data-original-title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">Xbox One X</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">yesterday</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-success">Completed</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $499,00
                                </td>
                                                <td className="text-center">
                                                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="" className="js-tooltip-enabled" data-original-title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">File Tree</h4>
                                    <div className="tree">
                                        <ul>
                                            <li><i className="fa fa-folder-open"></i> Project
                                <ul>
                                                    <li><i className="fa fa-folder-open"></i> Opened Folder <span>- 15kb</span>
                                                        <ul>
                                                            <li><i className="fa fa-folder-open"></i> css
                                                <ul>
                                                                    <li><i className="fa fa-code"></i> CSS Files <span>- 3kb</span>
                                                                    </li>

                                                                </ul>
                                                            </li>
                                                            <li><i className="fa fa-folder"></i> Folder close <span>- 10kb</span>
                                                            </li>
                                                            <li><i className="fab fa-html5"></i> index.html</li>
                                                            <li><i className="fa fa-picture-o"></i> favicon.ico</li>
                                                        </ul>
                                                    </li>
                                                    <li><i className="fa fa-folder"></i> Folder close <span>- 420kb</span>

                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="card has-shadow">
                                <div className="card-body border-top">
                                    <h4 className="card-title">Stocks</h4>
                                    <table className="table mb-0">
                                        <tbody>
                                            <tr>
                                                <td>APPL</td>
                                                <td>$ 9,500</td>
                                                <td className="color-green">+ 458</td>
                                            </tr>
                                            <tr>
                                                <td>GOOG</td>
                                                <td>$ 15,425</td>
                                                <td className="color-red">- 1,632</td>
                                            </tr>
                                            <tr>
                                                <td>AMD</td>
                                                <td>$ 11,540</td>
                                                <td className="color-green">+ 8,326</td>
                                            </tr>
                                            <tr>
                                                <td>HGM</td>
                                                <td>$ 15,855</td>
                                                <td className="color-green">+ 11,326</td>
                                            </tr>
                                            <tr>
                                                <td>MKR</td>
                                                <td>$ 18,500</td>
                                                <td className="color-red">- 6,586</td>
                                            </tr>
                                            <tr>
                                                <td>APPL</td>
                                                <td>$ 9,500</td>
                                                <td className="color-green">+ 458</td>
                                            </tr>
                                            <tr>
                                                <td>GOOG</td>
                                                <td>$ 15,425</td>
                                                <td className="color-red">- 1,632</td>
                                            </tr>
                                            <tr>
                                                <td>AMD</td>
                                                <td>$ 11,540</td>
                                                <td className="color-green">+ 8,326</td>
                                            </tr>
                                            <tr>
                                                <td>HGM</td>
                                                <td>$ 15,855</td>
                                                <td className="color-green">+ 11,326</td>
                                            </tr>
                                            <tr>
                                                <td>MKR</td>
                                                <td>$ 18,500</td>
                                                <td className="color-red">- 6,586</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Recent Comments</h4>
                                    <table className="table table-responsive">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product</th>
                                                <th>Customer</th>
                                                <th>Purchased On</th>
                                                <th>Status</th>
                                                <th>Tracking No#</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="{{ site.baseurl }}/images/icons/lulu/Desktop.png" style="width:50px" alt="iMac" />
                                                </td>
                                                <td>iMac</td>
                                                <td>Russell</td>
                                                <td>22/08/2018</td>
                                                <td>
                                                    <span className="badge badge-success font-weight-100">Paid</span>
                                                </td>
                                                <td>#98BC85SD84</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="{{ site.baseurl }}/images/icons/lulu/Mobile.png" style="width:50px" alt="iPhone" />
                                                </td>
                                                <td>iPhone</td>
                                                <td>Carol</td>
                                                <td>15/07/2018</td>
                                                <td>
                                                    <span className="badge badge-warning font-weight-100">Pending</span>
                                                </td>
                                                <td>#98SA3C9SC</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="{{ site.baseurl }}/images/icons/lulu/Clock.png" style="width:50px" alt="apple_watch" />
                                                </td>
                                                <td>Apple Watch</td>
                                                <td>Austin Pena</td>
                                                <td>10/07/2018</td>
                                                <td>
                                                    <span className="badge badge-success font-weight-100">Paid</span>
                                                </td>
                                                <td>#98BC85SD84</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="{{ site.baseurl }}/images/icons/lulu/Headphones.png" style="width:50px" alt="mac_mouse" />
                                                </td>
                                                <td>Headphones</td>
                                                <td>Randy</td>
                                                <td>22/04/2018</td>
                                                <td>
                                                    <span className="badge badge-default font-weight-100">Failed</span>
                                                </td>
                                                <td>#98SA3C9SC</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default SellerPortal;
