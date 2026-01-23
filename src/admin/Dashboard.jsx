import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section className="section bg-secondary min-h-screen">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link to="/admin/banners" className="card hover:border-primary border">
            <h2 className="text-xl mb-2">Manage Banners</h2>
            <p className="text-slate-600">Update homepage wallpapers</p>
          </Link>

          <Link to="/admin/content" className="card hover:border-primary border">
            <h2 className="text-xl mb-2">Manage Content</h2>
            <p className="text-slate-600">Edit About, Vision, Mission</p>
          </Link>

          <Link to="/admin/gallery" className="card hover:border-primary border">
            <h2 className="text-xl mb-2">Gallery</h2>
            <p className="text-slate-600">Upload & manage images</p>
          </Link>

          <Link to="/admin/notices" className="card hover:border-primary border">
            <h2 className="text-xl mb-2">Notices</h2>
            <p className="text-slate-600">Announcements & updates</p>
          </Link>

          <Link to="/admin/queries" className="card hover:border-primary border">
            <h2 className="text-xl mb-2">Contact Queries</h2>
            <p className="text-slate-600">View user messages</p>
          </Link>

          <Link to="/admin/profile" className="card hover:border-primary border">
            <h2 className="text-xl mb-2">Admin Profile</h2>
            <p className="text-slate-600">Account & logout</p>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Dashboard;
