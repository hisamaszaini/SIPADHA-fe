import type { DetailPengajuanSuratSchema } from '../../types/pengajuanSurat.types';
import { formatTanggal, formatTanggalSingkat } from '../../utils/date';
import KopSurat from '../pengajuanSurat/template/reusable/KopSurat';
export function TemplateKtmSekolah({ data }: {
    data: Extract<DetailPengajuanSuratSchema, { jenis: "KETERANGAN_TIDAK_MAMPU_SEKOLAH" }>;
}) {
    const dataPermohonan = data.dataPermohonan;
    const lokasi = data.lingkup;
    const lokasiSurat = lokasi === "DESA" ? "Cepoko" : "Ponorogo";
    const tahunSurat = new Date().getFullYear();

    return (<>
        <div className='page'>
            <div style={{
                lineHeight: "1.2"
            }}>
                <KopSurat />
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
                        /405.29.02.10/{tahunSurat}
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
                    Adalah benar-benar sebagai warga RT {data.penduduk.kartuKeluarga.rt.nomor}
                </span>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    RW {data.penduduk.kartuKeluarga.rt.rw.nomor} Dukuh {data.penduduk.kartuKeluarga.rt.rw.dukuh.nama}
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
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: '"Bookman Old Style"', padding: 0 }}>
                <tbody>
                    <tr>
                        <td style={{ width: "40%", verticalAlign: "top", lineHeight: 1, padding: 0 }}>&nbsp;</td>
                        <td style={{ width: "20%", verticalAlign: "top", lineHeight: 1, padding: 0 }}></td>
                        <td style={{ width: "40%", verticalAlign: "top", lineHeight: 1, padding: 0, textAlign: "right" }}>
                            {lokasiSurat}, {formatTanggal(data.createdAt)}
                        </td>
                    </tr>

                    <tr>
                        <td style={{ width: "40%", verticalAlign: "top", lineHeight: 1, padding: 0, textAlign: "center" }}>
                            Tanda Tangan / Cap Jempol
                        </td>
                        <td style={{ width: "20%", verticalAlign: "top", lineHeight: 1, padding: 0 }}></td>
                        <td style={{ width: "40%", verticalAlign: "top", lineHeight: 1, padding: 0, textAlign: "center" }}>
                            Kepala Desa Cepoko
                        </td>
                    </tr>

                    <tr>
                        <td style={{ width: "40%", verticalAlign: "top", lineHeight: 1, padding: 0, height: "70pt" }}>&nbsp;</td>
                        <td style={{ width: "20%", verticalAlign: "top", lineHeight: 1, padding: 0 }}></td>
                        <td style={{ width: "40%", verticalAlign: "top", lineHeight: 1, padding: 0 }}>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: "40%", verticalAlign: "top", lineHeight: 1, padding: 0, textAlign: "center" }}>
                            <strong>
                                <u>{(data.penduduk.nama).toUpperCase()}</u>
                            </strong>
                        </td>
                        <td style={{ width: "20%", verticalAlign: "top", lineHeight: 1, padding: 0 }}></td>
                        <td style={{ width: "40%", verticalAlign: "top", lineHeight: 1, padding: 0, textAlign: "center" }}>
                            <strong>
                                <u>{data.setting.namaKepdes}</u>
                            </strong>
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
                        /405.29.02.10/{tahunSurat}
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
            <table style={{ marginLeft: "5pt", fontFamily: "Arial, Tahoma", borderCollapse: "collapse", width: "100%" }}>
                <tbody>
                    {[
                        ["Nama", data.penduduk.nama.toUpperCase()],
                        ["Tempat dan Tanggal Lahir", `${data.penduduk.tempatLahir}, ${formatTanggalSingkat(data.penduduk.tanggalLahir).replaceAll('/', '-')}`],
                        ["Jenis Kelamin", data.penduduk.jenisKelamin],
                        ["Status Perkawinan", data.penduduk.statusPerkawinan],
                        ["Kewarganegaraan", "Indonesia"],
                        ["Agama", data.penduduk.agama],
                        ["Pekerjaan", data.penduduk.pekerjaan],
                        ["Nomor DRT / KK", data.penduduk.kartuKeluarga.noKk],
                        ["Nomor NIK", data.penduduk.nik],
                        ["Alamat", `Dukuh ${data.penduduk.kartuKeluarga.rt.rw.dukuh.nama} RT ${data.penduduk.kartuKeluarga.rt.nomor} RW ${data.penduduk.kartuKeluarga.rt.rw.nomor}, Desa Cepoko, Kecamatan Ngrayun, Kabupaten Ponorogo`],
                    ].map(([label, value]) => (
                        <tr key={label}>
                            <td style={{ width: "150pt", verticalAlign: "top", lineHeight: 1, padding: 0, margin: 0 }}>
                                <p style={{ margin: 0, lineHeight: 1 }}>{label}</p>
                            </td>
                            <td style={{ width: "20px", verticalAlign: "top", lineHeight: 1, padding: 0, margin: 0 }}>
                                <p style={{ margin: 0, lineHeight: 1 }}>:</p>
                            </td>
                            <td style={{ verticalAlign: "top", lineHeight: 1, padding: 0, margin: 0 }}>
                                <p style={{ margin: 0, lineHeight: 1 }}>{value}</p>
                            </td>
                        </tr>
                    ))}
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
            <table style={{ marginLeft: "5pt", fontFamily: "Tahoma", borderCollapse: "collapse", width: "100%" }}>
                <tbody>
                    {[
                        ["Nama", data.target?.nama],
                        ["Tempat dan Tanggal Lahir", `${data.target?.tempatLahir}, ${formatTanggalSingkat(data.target?.tanggalLahir).replaceAll('/', '-')}`],
                        ["Jenis Kelamin", data.target?.jenisKelamin],
                        ["Status Perkawinan", data.target?.statusPerkawinan],
                        ["Kewarganegaraan", "Indonesia"],
                        ["Agama", data.target?.agama],
                        ["Pekerjaan", data.target?.pekerjaan],
                        ["Nomor NIK", data.target?.nik],
                        ["Alamat", `Dukuh ${data.penduduk.kartuKeluarga.rt.rw.dukuh.nama} RT ${data.penduduk.kartuKeluarga.rt.nomor} RW ${data.penduduk.kartuKeluarga.rt.rw.nomor}, Desa Cepoko, Kecamatan Ngrayun, Kabupaten Ponorogo`],
                        ["Pada Sekolah/ Universitas", dataPermohonan.institusi],
                        ["", data.dataPermohonan.alamatSiswa]
                    ].map(([label, value], i) => (
                        <tr key={i}>
                            <td style={{ width: "150pt", verticalAlign: "top", lineHeight: "1", padding: "0" }}>
                                <p style={{ margin: 0, lineHeight: "1.2" }}>{label}</p>
                            </td>
                            <td style={{ width: "20px", verticalAlign: "top", lineHeight: "1", padding: "0" }}>
                                <p style={{ margin: 0, lineHeight: "1.2" }}>:</p>
                            </td>
                            <td style={{ verticalAlign: "top", lineHeight: "1", padding: "0" }}>
                                <p style={{ margin: 0, lineHeight: "1.2" }}>{value}</p>
                            </td>
                        </tr>
                    ))}
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
                    width: "100%", // 1. Buat lebar tabel penuh
                    borderCollapse: "collapse",
                    fontFamily: '"Arial", "Tahoma"'
                }}
            >
                <tbody>
                    <tr>
                        {/* Kolom kiri (bisa kosong atau diisi konten) */}
                        <td
                            style={{
                                width: "50%", // 2. Gunakan persentase
                                verticalAlign: "top"
                            }}
                        >
                            {/* Konten sisi kiri jika ada */}
                        </td>

                        {/* Kolom kanan untuk tanda tangan */}
                        <td
                            style={{
                                width: "35%", // 2. Gunakan persentase
                                verticalAlign: "top",
                                textAlign: "center"
                            }}
                        >
                            <p style={{ margin: 0, padding: 0 }}>
                                {lokasiSurat}, {formatTanggal(data.createdAt)}
                            </p>
                            <p style={{ margin: 0, padding: 0 }}>
                                Kepala Desa Cepoko
                            </p>

                            {/* 4. Jarak vertikal yang lebih baik */}
                            <div style={{ height: "80px" }}></div>

                            <p style={{ margin: 0, padding: 0 }}>
                                <strong>
                                    <u>{data.setting.namaKepdes}</u>
                                </strong>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>);
}