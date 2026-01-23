import { useNavigate } from "react-router-dom";

function AdminProfile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <section className="section bg-secondary min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Admin Profile</h1>
          <p className="text-slate-600">
            Manage your account and session settings.
          </p>
        </div>

        {/* Profile Card */}
        <div className="card space-y-6">

          <div>
            <h2 className="text-xl mb-1">Role</h2>
            <p className="text-slate-600">Administrator</p>
          </div>

          <div>
            <h2 className="text-xl mb-1">Access Level</h2>
            <p className="text-slate-600">
              Full access to content, gallery, banners, notices, and queries.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t flex justify-end">
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AdminProfile;
