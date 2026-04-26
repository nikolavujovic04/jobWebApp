import CompanyCard from "../components/Home/CompanyCard";
import "../styles/global.css"

const companies = [
  {
    id: 1,
    companyName: "TechCorp Solutions",
    industry: "Informacione tehnologije",
    location: "Beograd, Srbija",
    openPositions: 5,
  },
  {
    id: 2,
    companyName: "Nova Vizija",
    industry: "Marketing i dizajn",
    location: "Novi Sad, Srbija",
    openPositions: 3,
  },
  {
    id: 3,
    companyName: "DataFlow",
    industry: "Analitika podataka",
    location: "Niš, Srbija",
    openPositions: 2,
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="home__grid">
        {companies.map((company) => (
          <CompanyCard key={company.id} {...company} />
        ))}
      </div>
    </div>
  );
};

export default Home;
