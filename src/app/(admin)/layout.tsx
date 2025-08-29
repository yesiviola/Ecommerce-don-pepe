export default function AdminLayout({ children }: { children: React.ReactNode }) {
// TODO: verificar rol/credenciales, redirigir si no es admin
return (
<div className="container py-6">
<h1 className="mb-6 text-2xl font-semibold">Admin</h1>
{children}
</div>
);
}