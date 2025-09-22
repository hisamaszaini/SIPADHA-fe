import type { DetailPengajuanSuratSchema } from '../../types/pengajuanSurat.types';
import { formatTanggalSingkat } from '../../utils/date';
export function TemplateKeteranganTmMobil({ data }: { data: DetailPengajuanSuratSchema }) {
    const lokasi = data.lingkup;
    const lokasiSurat = lokasi === "DESA" ? "Cepoko" : "Ponorogo";
    const tahunSurat = new Date().getFullYear();

    return (<>
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
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    SURAT KETERANGAN{" "}
                </span>
            </strong>
        </p>
        <p style={{ textAlign: "center" }}>
            <strong>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>NOMOR: 474/</span>
            </strong>
            <strong>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    &nbsp;&nbsp;&nbsp;{" "}
                </span>
            </strong>
            <strong>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    /405.29.02.10/{tahunSurat}
                </span>
            </strong>
        </p>
        <p style={{ fontSize: "14pt" }}>
            <strong>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
            </strong>
        </p>
        <p style={{ fontSize: "14pt" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                            width: "148.8pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>Agama</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "10.5pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>{data.penduduk.agama}</span>
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
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Kewarganegaraan
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>WNI</span>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Status Perkawinan
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
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "281.5pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>{data.penduduk.statusPerkawinan}</span>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
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
                <tr>
                    <td
                        style={{
                            width: "148.8pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Menerangkan
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
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Bahwa orang tersebut diatas adalah benar benar penduduk warga Desa
                                Cepoko yang menurut pengamatan Kami sebagai Pemerintah Desa
                                Cepoko, {" "}
                            </span>
                            <strong>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>tidak</span>
                            </strong>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                {" "}
                                memiliki armada Mobil angkutan.
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
        <p>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
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
                                {lokasiSurat}, {formatTanggalSingkat(data.createdAt).replaceAll("/", " – ")}
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
                                Tanda Tangan
                            </span>
                        </p>
                        <p style={{ textAlign: "center" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Yang bersangkutan{" "}
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
                                        {data.setting.namaKepdes}
                                    </span>
                                </u>
                            </strong>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
    );
};