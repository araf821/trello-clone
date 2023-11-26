import OrganizationControl from "./_components/OrganizationControl";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrganizationControl />
      {children}
    </>
  );
};
export default OrganizationLayout;
