import type { DetailPengajuanSuratSchema } from '../../types/pengajuanSurat.types';
import { formatTanggal, hitungUmur } from '../../utils/date';
export function TemplateKeteranganProfesi({ data }: { data: DetailPengajuanSuratSchema }) {

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
        <p style={{ textAlign: "center" }}>
            <strong>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    SURAT KETERANGAN{" "}
                </span>
            </strong>
        </p>
        <p style={{ textAlign: "center" }}>
            <strong>
                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                    NOMOR: 470/ 361/405.29.02.10/2024
                </span>
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
            <span style={{ fontFamily: '"Bookman Old Style"' }}>Ponorogo,</span>
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
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    PIRNGADI,S.Sos
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
                                3502021705620001
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
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>Jabatan </span>
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
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>RT 02</span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                RW 01 Dukuh Krajan
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
            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                Menerangkan bahwa Surat Pernyataan yang dibuat pada tanggal 15 Oktober
                2024 bahwa :
            </span>
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
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    {(data.penduduk.nama).toUpperCase()}
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
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>Umur</span>
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
                                {hitungUmur(data.penduduk.tanggalLahir)} tahun
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
                        <p style={{ lineHeight: "115%", fontSize: "11pt" }}>
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
                        <p style={{ lineHeight: "115%", fontSize: "11pt" }}>
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
                        <p style={{ lineHeight: "115%", fontSize: "11pt" }}>
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
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                Adalah BENAR berprofesi sebagai {data.penduduk.pekerjaan}.
            </span>
        </p>
        <p>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                Demikian Surat Keterangan ini dibuat,untuk dapat dipergunakan sebagaimana
                mestinya dengan penuh tanggung jawab.
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
                        <p>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                        </p>
                        <p>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                        </p>
                        <p>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                        </p>
                        <p>
                            <strong>
                                <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                    PIRNGADI,S.Sos
                                </span>
                            </strong>
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
                    </td>
                </tr>
            </tbody>
        </table>
    </>
    );
};