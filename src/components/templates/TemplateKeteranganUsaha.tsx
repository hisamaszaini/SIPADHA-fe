import type { PengajuanSuratDetail } from '../../types/pengajuanSurat.types';
import { formatTanggalSingkat } from '../../utils/date';
export function TemplateKeteranganUsaha({ data }: { data: PengajuanSuratDetail }) {
  const dataPermohonan = data.dataPermohonan as any;

  return (
    <>
        <div style={{
          lineHeight: "1.2"
        }}>
          <p
            className="BodyText"
            style={{ marginLeft: "85.05pt", textAlign: "center", fontSize: "14pt" }}
          >
            <span style={{ height: "0pt", textAlign: "left", display: "block" }}>
              <img
                src="/images/logo.png"
                alt="Logo Dinas Pemerintahan Ponorogo"
                style={{ width: "3.23cm", height: "3.27cm", marginLeft: "-85.05pt", position: "absolute", objectFit: "contain" }}
              />
            </span>
            <strong>
              {" "}
              <span style={{ fontFamily: "Arial" }}>PEMERINTAH KABUPATEN PONOROGO</span>
            </strong>
          </p>
          <p className="Subtitle text-center" style={{ marginLeft: "85.05pt", fontSize: "14pt" }}>
            <strong>
              <span style={{ textAlign: "center", fontFamily: "Arial" }}>KECAMATAN NGRAYUN</span>
            </strong>
          </p>
          <p className="Subtitle text-center" style={{ marginLeft: "85.05pt", fontSize: "18pt" }}>
            <strong>
              <span style={{ textAlign: "center", fontFamily: "Arial" }}>DESA CEPOKO</span>
            </strong>
          </p>
          <p style={{ marginLeft: "85.05pt", textAlign: "center", fontSize: "11pt" }}>
            <span style={{ fontFamily: "Arial" }}>
              Jalan Arum Dalu Nomor 1 Cepoko, Ngrayun, Ponorogo, Jawa Timur 63464
            </span>
          </p>
          <p style={{ marginLeft: "85.05pt", textAlign: "center", fontSize: "11pt" }}>
            <span style={{ fontFamily: "Arial" }}>
              Telepon 083895273260, Faksimile 083895273260
            </span>
          </p>
          <p
            style={{
              marginLeft: "85.05pt",
              textAlign: "center",
              borderBottom: "0.75pt solid #000000",
              paddingBottom: "1pt",
              fontSize: "11pt"
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              Laman Cepokongrayun.ponorogo.go.id , Pos – el Cepokongrayun@gmail.com
            </span>
          </p>
        </div>
        <p style={{ textAlign: "justify" }}>&nbsp;</p>
        <p style={{ textAlign: "center", fontSize: "14pt" }}>
          <strong>
            <u>
              <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>SURAT</span>
            </u>
          </strong>
          <strong>
            <u>
              <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp; </span>
            </u>
          </strong>
          <strong>
            <u>
              <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>KETERANGAN</span>
            </u>
          </strong>
          <strong>
            <u>
              <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp; </span>
            </u>
          </strong>
          <strong>
            <u>
              <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>USAHA</span>
            </u>
          </strong>
        </p>
        <p style={{ textAlign: "center" }}>
          <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>Nomor</span>
          <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
          <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
          <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp; </span>
          <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>474/</span>
          <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
            &nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
          <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
            /405.29.02.10/2025
          </span>
        </p>
        <p style={{ textAlign: "center" }}>
          <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
        </p>
        <table style={{ padding: "0pt", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td
                colSpan={3}
                style={{
                  width: "448.2pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    Yang bertanda tangan dibawah ini
                  </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    &nbsp;&nbsp;{" "}
                  </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                colSpan={3}
                style={{
                  width: "448.2pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ textAlign: "center", fontSize: "5pt" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>Nama</span>
                </p>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    PIRNGADI, S Sos
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>Jabatan</span>
                </p>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    Kepala Desa{" "}
                  </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    Cepoko, Kecamatan Ngrayun,
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    Kabupaten Ponorogo
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: "center", fontSize: "5pt" }}>
          <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
        </p>
        <table style={{ padding: "0pt", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td
                colSpan={3}
                style={{
                  width: "448.2pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    Dengan ini menerangkan
                  </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>Nama </span>
                </p>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <strong>
                    <span style={{ fontFamily: "Tahoma" }}>{(data.penduduk.nama).toUpperCase()}</span>
                  </strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    Tempat Tanggal Lahir / umur
                  </span>
                </p>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>{data.penduduk.tempatLahir},</span>{" "}
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    {formatTanggalSingkat(data.penduduk.tanggalLahir).replaceAll('/', '-')}
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>NIK</span>
                </p>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>{data.penduduk.nik}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>Alamat</span>
                </p>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}> RT {data.penduduk.kartuKeluarga.rt.nomor} RW {data.penduduk.kartuKeluarga.rt.rw.nomor} Dukuh {data.penduduk.kartuKeluarga.rt.rw.dukuh.nama} Desa Cepoko, Kecamatan Ngrayun, Kabupaten Ponorogo
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                colSpan={3}
                style={{
                  width: "448.2pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    Yang bersangkutan
                  </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp; </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    benar- benar pemilik usaha di bidang *)
                  </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <ul className="awlist1" style={{ margin: "0pt", paddingLeft: "0pt" }}>
                  <li
                    className="ListParagraph"
                    style={{
                      marginBottom: "0pt",
                      textIndent: "-18pt",
                      lineHeight: "normal",
                      fontFamily: "Wingdings"
                    }}
                  >
                    <span
                      style={{
                        width: "8.2pt",
                        font: '7pt "Times New Roman"',
                        display: "inline-block"
                      }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                      Pertanian
                    </span>
                  </li>
                </ul>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <strong>
                    <em>
                      <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                        {dataPermohonan.pertanian}
                      </span>
                    </em>
                  </strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <ul className="awlist2" style={{ margin: "0pt", paddingLeft: "0pt" }}>
                  <li
                    className="ListParagraph"
                    style={{
                      marginBottom: "0pt",
                      textIndent: "-18pt",
                      lineHeight: "normal",
                      fontFamily: "Wingdings"
                    }}
                  >
                    <span
                      style={{
                        width: "8.2pt",
                        font: '7pt "Times New Roman"',
                        display: "inline-block"
                      }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                      Perdagangan
                    </span>
                  </li>
                </ul>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <strong>
                    <em>
                      <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                        {dataPermohonan.perdagangan}
                      </span>
                    </em>
                  </strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <ul className="awlist3" style={{ margin: "0pt", paddingLeft: "0pt" }}>
                  <li
                    className="ListParagraph"
                    style={{
                      marginBottom: "0pt",
                      textIndent: "-18pt",
                      lineHeight: "normal",
                      fontFamily: "Wingdings"
                    }}
                  >
                    <span
                      style={{
                        width: "8.2pt",
                        font: '7pt "Times New Roman"',
                        display: "inline-block"
                      }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif', marginLeft: '' }}>
                      Peternakan
                    </span>
                  </li>
                </ul>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <strong>
                    <em>
                      <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                        {dataPermohonan.peternakan}
                      </span>
                    </em>
                  </strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <ul className="awlist4" style={{ margin: "0pt", paddingLeft: "0pt" }}>
                  <li
                    className="ListParagraph"
                    style={{
                      marginBottom: "0pt",
                      textIndent: "-18pt",
                      lineHeight: "normal",
                      fontFamily: "Wingdings"
                    }}
                  >
                    <span
                      style={{
                        width: "8.2pt",
                        font: '7pt "Times New Roman"',
                        display: "inline-block"
                      }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                      Perindustrian
                    </span>
                  </li>
                </ul>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <strong>
                    <em>
                      <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                        {dataPermohonan.perindustrian}
                      </span>
                    </em>
                  </strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <ul className="awlist5" style={{ margin: "0pt", paddingLeft: "0pt" }}>
                  <li
                    className="ListParagraph"
                    style={{
                      marginBottom: "0pt",
                      textIndent: "-18pt",
                      lineHeight: "normal",
                      fontFamily: "Wingdings"
                    }}
                  >
                    <span
                      style={{
                        width: "8.2pt",
                        font: '7pt "Times New Roman"',
                        display: "inline-block"
                      }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>Jasa</span>
                  </li>
                </ul>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <strong>
                    <em>
                      <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                        {dataPermohonan.jasa}
                      </span>
                    </em>
                  </strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <ul className="awlist6" style={{ margin: "0pt", paddingLeft: "0pt" }}>
                  <li
                    className="ListParagraph"
                    style={{
                      marginBottom: "0pt",
                      textIndent: "-18pt",
                      lineHeight: "normal",
                      fontFamily: "Wingdings"
                    }}
                  >
                    <span
                      style={{
                        width: "8.2pt",
                        font: '7pt "Times New Roman"',
                        display: "inline-block"
                      }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                      Lain – lain{" "}
                    </span>
                  </li>
                </ul>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>:</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <strong>
                    <em>
                      <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                        {dataPermohonan.lain}
                      </span>
                    </em>
                  </strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "150.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p
                  className="ListParagraph"
                  style={{ marginBottom: "0pt", lineHeight: "normal" }}
                >
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{
                  width: "3.35pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{
                  width: "272.7pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                colSpan={3}
                style={{
                  width: "448.2pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    Adapun usaha tersebut berada di 
                  </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    {" "} {dataPermohonan.alamatUsaha},
                    sejak tahun {dataPermohonan.tahun}, dan sampai saat ini{" "}
                  </span>
                  <strong>
                    <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                      masih berjalan dengan lancar.
                    </span>
                  </strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                colSpan={3}
                style={{
                  width: "448.2pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                colSpan={3}
                style={{
                  width: "448.2pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    Demikian Surat Keterangan ini dibuat dengan sebenarnya untuk dapat
                    dipergunakan seperlunya
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: "center" }}>
          <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
        </p>
        <table
          style={{ marginLeft: "21.3pt", padding: "0pt", borderCollapse: "collapse" }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  width: "180.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ marginLeft: "18pt" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{ width: "53pt", padding: "0pt 5.4pt", verticalAlign: "top" }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{
                  width: "159.3pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    Ponorogo, {formatTanggalSingkat(data.createdAt).replaceAll("/", " –")}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "180.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p style={{ marginLeft: "18pt" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{ width: "53pt", padding: "0pt 5.4pt", verticalAlign: "top" }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{
                  width: "159.3pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "180.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p
                  className="ListParagraph"
                  style={{
                    marginLeft: "1.65pt",
                    marginBottom: "0pt",
                    lineHeight: "normal"
                  }}
                >
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    Tanda Tangan Pemohon
                  </span>
                </p>
              </td>
              <td
                style={{ width: "53pt", padding: "0pt 5.4pt", verticalAlign: "top" }}
              >
                <p style={{ textAlign: "right" }}>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{
                  width: "159.3pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                    &nbsp;&nbsp;&nbsp;{" "}
                  </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>Kepala</span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp; </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>Desa</span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp; </span>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>Cepoko</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "180.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{ width: "53pt", padding: "0pt 5.4pt", verticalAlign: "top" }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{
                  width: "159.3pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "180.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p
                  className="ListParagraph"
                  style={{ marginBottom: "0pt", lineHeight: "normal" }}
                >
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{ width: "53pt", padding: "0pt 5.4pt", verticalAlign: "top" }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{
                  width: "159.3pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "180.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p
                  className="ListParagraph"
                  style={{ marginBottom: "0pt", lineHeight: "normal" }}
                >
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{ width: "53pt", padding: "0pt 5.4pt", verticalAlign: "top" }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
              <td
                style={{
                  width: "159.3pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp;</span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "180.55pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <strong>
                    <span style={{ fontFamily: "Tahoma" }}>{(data.penduduk.nama).toUpperCase()}</span>
                  </strong>
                </p>
              </td>
              <td
                style={{ width: "53pt", padding: "0pt 5.4pt", verticalAlign: "top" }}
              >
                <p>
                  <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>&nbsp; </span>
                </p>
              </td>
              <td
                style={{
                  width: "159.3pt",
                  padding: "0pt 5.4pt",
                  verticalAlign: "top"
                }}
              >
                <p>
                  <strong>
                    <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                      &nbsp;&nbsp;
                    </span>
                  </strong>
                  <strong>
                    <u>
                      <span style={{ fontFamily: '"Bookman Old Style", "URW Bookman L", "Times New Roman", serif' }}>
                        PIRNGADI, S.Sos
                      </span>
                    </u>
                  </strong>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <p style={{ textAlign: "justify", padding: "0pt 5.4pt" }}>
          <em>Ket</em>
          <em>
            <span style={{ width: "19.34pt", display: "inline-block" }}>&nbsp;</span>
          </em>
          <em>:</em>
          <em>&nbsp;</em>
          <em>1) Coret yang tidak perlu</em>
        </p>
        <p style={{ textAlign: "justify", padding: "0pt 5.4pt" }}>
          <em>
            <span style={{ width: "36pt", display: "inline-block" }}>&nbsp;</span>
          </em>
          <em>&nbsp;&nbsp; </em>
          <em>2) Isi dengan jelas jenis usahanya</em>
        </p>
        <p style={{ textAlign: "justify" }}>
          <em>&nbsp;</em>
        </p>
        <p style={{ textAlign: "justify", padding: "0pt 5.4pt" }}>
          <em>Catatan</em>
          <em>
            <span style={{ width: "33.33pt", display: "inline-block" }}>&nbsp;</span>
          </em>
          <em>&nbsp; </em>
          <em>:</em>
        </p>
        <ol style={{ margin: "0pt", paddingLeft: "0pt" }}>
          <li
            className="ListParagraph"
            style={{
              marginLeft: "49.35pt",
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "normal",
              paddingLeft: "4.65pt",
              fontStyle: "italic"
            }}
          >
            Usaha ...............................&nbsp; Tgl
            ........................... Ttd/Paraf ........................
          </li>
          <li
            className="ListParagraph"
            style={{
              marginLeft: "49.35pt",
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "normal",
              paddingLeft: "4.65pt",
              fontStyle: "italic"
            }}
          >
            Usaha ................................................&nbsp; Tgl
            ........................... Ttd/Paraf ........................
          </li>
          <li
            className="ListParagraph"
            style={{
              marginLeft: "49.35pt",
              marginBottom: "0pt",
              textAlign: "justify",
              lineHeight: "normal",
              paddingLeft: "4.65pt",
              fontStyle: "italic"
            }}
          >
            Usaha ...............................&nbsp; Tgl
            ........................... Ttd/Paraf ........................
          </li>
        </ol>
    </>
  );
};