import { certificates } from "../data";

export default function Certificates() {
  return (
    <>
      <p>Here are all the certificates I got since I started coding.</p>
      <ul>
        {certificates.map((certificate) => {
          <li key={certificate.id}>
            <img src={certificate.certificate} />
            {/* line 10 is not showing*/}
          </li>;
        })}
      </ul>
    </>
  );
}
