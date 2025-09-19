import type { DetailPengajuanSuratSchema } from '../../types/pengajuanSurat.types';
import { formatTanggal, formatTanggalSingkat } from '../../utils/date';
export function TemplateKtmSekolah({ data }: { data: Extract<DetailPengajuanSuratSchema, { jenis: "KETERANGAN_TIDAK_MAMPU_SEKOLAH" }>;
}) {
  const dataPermohonan = data.dataPermohonan;

    return (<>
        <div className='page'>
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
            <p style={{ textAlign: "center" }}>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>
                        SURAT KETERANGAN TIDAK MAMPU
                    </span>
                </strong>
            </p>
            <p style={{ textAlign: "center" }}>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>NOMOR: 474/</span>
                </strong>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </strong>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>
                        /405.29.02.10/2025
                    </span>
                </strong>
            </p>
            <p style={{ textAlign: "center", fontSize: "14pt" }}>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                </strong>
            </p>
            <p>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    Yang bertanda tangan dibawah ini Kami Kepala Desa Cepoko, Kecamatan
                    Ngrayun, Kabupaten
                </span>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    Ponorogo, menerangkan dengan sebenarnya bahwa:
                </span>
            </p>
            <p>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
            </p>
            <table style={{ padding: "0pt", borderCollapse: "collapse" }}>
                <tbody>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>N a m a</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <strong>
                                    <span style={{ fontFamily: '"Bookman Old Style"' }}>{(data.penduduk.nama).toUpperCase()}</span>
                                </strong>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    Tempat Tanggal Lahir/Umur
                                </span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    {data.penduduk.tempatLahir}, {formatTanggalSingkat(data.penduduk.tanggalLahir).replaceAll('/', '-')}
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>No. KK</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    {data.penduduk.kartuKeluarga.noKk}
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>NIK</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    {data.penduduk.nik}
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    Jenis Kelamin
                                </span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>{data.penduduk.jenisKelamin}</span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>Pekerjaan</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    {data.penduduk.pekerjaan}
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>Alamat</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>RT {data.penduduk.kartuKeluarga.rt.nomor}</span>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    RW {data.penduduk.kartuKeluarga.rt.rw.nomor} Dukuh {data.penduduk.kartuKeluarga.rt.rw.dukuh.nama}
                                </span>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    Desa Cepoko, Kecamatan Ngrayun, Kabupaten Ponorogo
                                </span>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
            </p>
            <p>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    Adalah benar-benar sebagai warga RT 01
                </span>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    RW 01 Dukuh Krajan
                </span>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    Desa Cepoko, Kecamatan Ngrayun, Kabupaten Ponorogo yang merupakan orang
                    tua
                </span>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>kandung dari :</span>
            </p>
            <p>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
            </p>
            <table style={{ padding: "0pt", borderCollapse: "collapse" }}>
                <tbody>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>N a m a</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <strong>
                                    <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                        {(data.target?.nama)?.toUpperCase()}
                                    </span>
                                </strong>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    Tempat Tanggal Lahir/Umur
                                </span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    {data.target?.tempatLahir}, {formatTanggalSingkat(data.target?.tanggalLahir).replaceAll('/', '-')}
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>NIK</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    {data.target?.nik}
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    Jenis Kelamin
                                </span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>{data.target?.jenisKelamin}</span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    Pendidikan Pada
                                </span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    {data.dataPermohonan?.institusi ?? ''}
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>Alamat</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    {data.dataPermohonan?.alamatSiswa}
                                </span>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>60213</span>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p style={{ paddingTop: "5.4pt" }}>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    Yang menurut pengamatan Kami, bahwa keluarga tersebut diatas
                </span>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>yang keadaan </span>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>
                        Perekonomiannya Tidak Mampu
                    </span>
                </strong>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>.</span>
            </p>
            <p>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
            </p>
            <p>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    Demikian Surat Keterangan ini Kami buat dengan sebenar-benarnya untuk
                    dapat dipergunakan sebagaimana mestinya.
                </span>
            </p>
            <p>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
            </p>
            <table style={{ padding: "0pt", borderCollapse: "collapse" }}>
                <tbody>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "128.25pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "169.35pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    Cepoko, {formatTanggal(data.createdAt)}
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "center" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    Tanda Tangan/Cap Jempol
                                </span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "128.25pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "169.35pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    Kepala Desa Cepoko
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "128.25pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "169.35pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "128.25pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "169.35pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "128.25pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "169.35pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "148.8pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "center" }}>
                                <strong>
                                    <u>
                                        <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                            {(data.penduduk.nama).toUpperCase()}
                                        </span>
                                    </u>
                                </strong>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "128.25pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "169.35pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <strong>
                                    <u>
                                        <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                            PIRNGADI, S.Sos
                                        </span>
                                    </u>
                                </strong>
                            </p>
                            <p>
                                <strong>
                                    <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                                </strong>
                            </p>
                            <p>
                                <strong>
                                    <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                                </strong>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="page-break">
            <div style={{
                paddingTop: "1.5cm",
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
            <p style={{ textAlign: "center" }}>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>SURAT</span>
                </strong>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                </strong>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>KETERANGAN</span>
                </strong>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                </strong>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>PENGHASILAN</span>
                </strong>
            </p>
            <p style={{ textAlign: "center", fontSize: "11pt" }}>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>NOMOR: 474/</span>
                </strong>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                </strong>
                <strong>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>
                        /405.29.02.10/2025
                    </span>
                </strong>
            </p>
            <p>
                <strong>&nbsp;</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
                Yang bertanda tangan dibawah ini
                <span style={{ width: "15.39pt", display: "inline-block" }}>&nbsp;</span>:
            </p>
            <table
                style={{ width: "481.95pt", padding: "0pt", borderCollapse: "collapse" }}
            >
                <tbody>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Nama</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify", fontSize: "10pt" }}>
                                <span style={{ fontFamily: "Arial" }}>{(data.penduduk.nama).toUpperCase()}</span>
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span>
                                    Tempat dan Tanggal Lahir
                                </span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span>
                                    {data.penduduk.tempatLahir}, {formatTanggalSingkat(data.penduduk.tanggalLahir).replaceAll('/', '-')}
                                </span>
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Jenis Kelamin</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.penduduk.jenisKelamin}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Status Perkawinan</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.penduduk.statusPerkawinan}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Kewarganegaraan</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Indonesia</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Agama</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.penduduk.agama}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Pekerjaan</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.penduduk.pekerjaan}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Nomor DRT / KK</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.penduduk.kartuKeluarga.noKk}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Nomor&nbsp; NIK</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.penduduk.nik}</p>
                        </td>
                    </tr>
 
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Alamat</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>
                                Dukuh Krajan RT 001 RW 001, Desa Cepoko,
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>
                                Kecamatan Ngrayun, Kabupaten Ponorogo
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>&nbsp;</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p style={{ textAlign: "justify" }}>
                Dengan ini menerangkan bahwa penghasilan saya&nbsp; :
            </p>
            <table
                style={{ width: "481.95pt", padding: "0pt", borderCollapse: "collapse" }}
            >
                <tbody>
                    <tr>
                        <td
                            style={{
                                width: "201.85pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.penduduk.pekerjaan}</p>
                        </td>
                        <td
                            style={{
                                width: "3.35pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "244.35pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{dataPermohonan.penghasilan},-</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "201.85pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Keterangan</p>
                        </td>
                        <td
                            style={{
                                width: "3.35pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "244.35pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{dataPermohonan.keterangan}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p style={{ textAlign: "justify" }}>&nbsp;</p>
            <p style={{ textAlign: "justify" }}>
                Adalah benar – benar orang tua / wali dari&nbsp; :
            </p>
            <p style={{ textAlign: "justify", fontSize: "5pt" }}>&nbsp;</p>
            <table
                style={{ width: "481.95pt", padding: "0pt", borderCollapse: "collapse" }}
            >
                <tbody>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Nama</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.target?.nama}</p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ fontSize: "11pt" }}>
                                <span>
                                    Tempat dan Tanggal Lahir
                                </span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "10.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span>:</span>
                            </p>
                        </td>
                        <td
                            style={{
                                width: "281.5pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p>
                                <span>
                                    {data.target?.tempatLahir}, {formatTanggalSingkat(data.target?.tanggalLahir).replaceAll('/', '-')}
                                </span>
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Jenis Kelamin</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.target?.jenisKelamin}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Status Perkawinan</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.target?.statusPerkawinan}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Kewarganegaraan</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Indonesia</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Agama</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.target?.agama}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Pekerjaan</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.target?.pekerjaan}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Nomor&nbsp; NIK</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>{data.target?.nik}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Alamat</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>
                                Dukuh Krajan RT 001 RW 001, Desa Cepoko,
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>
                                Kecamatan Ngrayun, Kabupaten Ponorogo
                            </p>
                        </td>
                    </tr>

<tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "bottom"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Pada Sekolah/ Universitas</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>:</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>
                                {dataPermohonan.institusi}
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style={{
                                width: "134.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "6.75pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "308.1pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>
                                RT {data.penduduk.kartuKeluarga.rt.nomor} RW {data.penduduk.kartuKeluarga.rt.rw.nomor} Dukuh {data.penduduk.kartuKeluarga.rt.rw.dukuh.nama} Desa Cepoko, Kecamatan Ngrayun, Kabupaten Ponorogo
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p style={{ textAlign: "justify" }}>&nbsp;</p>
            <p style={{ textAlign: "justify" }}>
                Demikian surat keterangan penghasilan ini saya buat dengan sebenar –
                benarnya dan saya bersedia dikenakan sanksi sesuai peraturan hukum yang
                berlaku apabila saya memberikan informasi yang tidak benar.&nbsp;
            </p>
            <table
                style={{
                    width: "389.8pt",
                    marginLeft: "92.15pt",
                    padding: "0pt",
                    borderCollapse: "collapse"
                }}
            >
                <tbody>
                    <tr>
                        <td
                            style={{
                                width: "166.4pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "31.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "159.3pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Ponorogo, {formatTanggal(data.createdAt)}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "166.4pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "31.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "159.3pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>Kepala Desa Cepoko</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "166.4pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "31.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "159.3pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>&nbsp;</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "166.4pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "31.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "159.3pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>&nbsp;</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "166.4pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "31.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "159.3pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>&nbsp;</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{
                                width: "166.4pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "31.7pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "middle"
                            }}
                        >
                            <p>&nbsp;</p>
                        </td>
                        <td
                            style={{
                                width: "159.3pt",
                                padding: "0pt 5.4pt",
                                verticalAlign: "top"
                            }}
                        >
                            <p style={{ textAlign: "justify" }}>
                                <strong>
                                    <u>PIRNGADI ,S.Sos</u>
                                </strong>
                            </p>
                            <p style={{ textAlign: "justify" }}>&nbsp;</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>);
}