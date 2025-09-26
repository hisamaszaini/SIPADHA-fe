import type { DetailPengajuanSuratSchema } from '../../types/pengajuanSurat.types';
import { formatTanggalSingkat } from '../../utils/date';
import KopSurat from '../pengajuanSurat/template/reusable/KopSurat';
export function TemplateKeteranganAhliWaris({ data, }: { data: Extract<DetailPengajuanSuratSchema, { jenis: "KETERANGAN_AHLI_WARIS" }>; }) {
    const lokasi = data.lingkup;
    const lokasiSurat = lokasi === "DESA" ? "Cepoko" : "Ponorogo";
    const tahunSurat = new Date().getFullYear();

    return (<>
        <div style={{
            lineHeight: "1.2"
        }}>
            <KopSurat />
        </div>
        <p style={{ textAlign: "justify" }}>&nbsp;</p>
        <p style={{ textAlign: "center", fontSize: "16pt" }}>
            <strong>
                <u>
                    <span style={{ fontFamily: "Tahoma" }}>SURAT</span>
                </u>
            </strong>
            <strong>
                <u>
                    <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
                </u>
            </strong>
            <strong>
                <u>
                    <span style={{ fontFamily: "Tahoma" }}>KETERANGAN AHLI WARIS</span>
                </u>
            </strong>
            <span style={{ fontFamily: "Tahoma" }}> </span>
        </p>
        <p style={{ textAlign: "center", paddingTop: "1pt" }}>
            <span style={{ fontFamily: "Tahoma" }}>NOMOR</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>474 /</span>
            <span style={{ fontFamily: "Tahoma" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
            <span style={{ fontFamily: "Tahoma" }}>/ 405.29.02.10/ {tahunSurat}</span>
        </p>
        <p>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ marginLeft: "5pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>
                Yang bertanda tangan di bawah ini Kami Kepala
            </span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Desa</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Cepoko, Kecamatan</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>
                Ngrayun, Kabupaten Ponorogo, menerangkan dengan sebenarnya bahwa
            </span>
            <span style={{ fontFamily: "Tahoma" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
        </p>
        <table style={{ marginLeft: "5pt", fontFamily: "Arial, Tahoma", borderCollapse: "collapse", width: "100%" }}>
            <tbody>
                {([
                    ["Nama", <strong>{data.dataPermohonan?.namaAhli?.toUpperCase()}</strong>],
                    ["Jenis Kelamin", data.dataPermohonan?.jenisKelamin || "-"],
                    [
                        "Tempat Tanggal Lahir / Umur",
                        `${data.dataPermohonan?.tempatLahir || "-"}, ${data.dataPermohonan?.tanggalLahir
                            ? formatTanggalSingkat(data.dataPermohonan.tanggalLahir).replaceAll("/", "-")
                            : "-"
                        }`,
                    ],
                    ["Hubungan Keluarga", data.dataPermohonan?.hubungan || "Anak Kandung"],
                    ["Alamat", data.dataPermohonan?.alamat || "-"],
                ] as [string, React.ReactNode][]).map(([label, value]) => (
                    <tr key={label}>
                        <td
                            style={{
                                width: "160pt",
                                verticalAlign: "top",
                                lineHeight: 1.2,
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            <p style={{ margin: 0, lineHeight: 1.2 }}>{label}</p>
                        </td>
                        <td
                            style={{
                                width: "20px",
                                verticalAlign: "top",
                                lineHeight: 1.2,
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            <p style={{ margin: 0, lineHeight: 1.2 }}>:</p>
                        </td>
                        <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0, margin: 0 }}>
                            <p style={{ margin: 0, lineHeight: 1.2 }}>{value}</p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <p style={{ textAlign: "justify" }}>
            <span
                style={{ width: "5pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
        </p>
        <p style={{ marginLeft: "5pt", textIndent: "-45pt", textAlign: "justify" }}>
            <span
                style={{
                    width: "42.55pt",
                    textIndent: "0pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
            >
                &nbsp;
            </span>
            <span style={{ fontFamily: "Tahoma" }}> Adalah</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>benar-benar</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>sebagai</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>
                Ahli Waris yang syah dari orang tersebut di bawah ini :
            </span>
        </p>
        <table style={{ marginLeft: "5pt", fontFamily: "Arial, Tahoma", borderCollapse: "collapse", width: "100%" }}>
            <tbody>
                {([
                    [
                        "Nama",
                        <strong key="nama">
                            {data.penduduk.nama.toUpperCase()}
                            {data.penduduk.jenisKelamin === "Perempuan"
                                ? " (Almarhumah)"
                                : " (Almarhum)"}
                        </strong>,
                    ],
                    ["Jenis Kelamin", data.penduduk.jenisKelamin],
                    [
                        "Tempat Tanggal Lahir / Umur",
                        `${data.penduduk.tempatLahir}, ${formatTanggalSingkat(
                            data.penduduk.tanggalLahir
                        ).replaceAll("/", "-")}`,
                    ],
                    ["Pekerjaan", data.penduduk.pekerjaan || "—"],
                    [
                        "Alamat",
                        `RT ${data.penduduk.kartuKeluarga.rt.nomor} RW ${data.penduduk.kartuKeluarga.rt.rw.nomor}, Dukuh ${data.penduduk.kartuKeluarga.rt.rw.dukuh.nama}, Desa Cepoko, Kecamatan Ngrayun, Kabupaten Ponorogo`,
                    ],
                ] as [string, React.ReactNode][]).map(([label, value]) => (
                    <tr key={label}>
                        <td
                            style={{
                                width: "160pt",
                                verticalAlign: "top",
                                lineHeight: 1.2,
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            <p style={{ margin: 0, lineHeight: 1.2 }}>{label}</p>
                        </td>
                        <td
                            style={{
                                width: "20px",
                                verticalAlign: "top",
                                lineHeight: 1.2,
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            <p style={{ margin: 0, lineHeight: 1.2 }}>:</p>
                        </td>
                        <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0, margin: 0 }}>
                            <p style={{ margin: 0, lineHeight: 1.2 }}>{value}</p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <p style={{ marginLeft: "5pt", textAlign: "justify" }}>
            <span
                style={{ width: "54pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
            <span
                style={{ width: "9pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
            <span
                style={{ width: "36pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
            <span
                style={{ width: "36pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;&nbsp;&nbsp; </span>
        </p>
        <p style={{ marginLeft: "5pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>Surat</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>
                Keterangan ini diberikan, untuk mengajukan Persyaratan
            </span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>: </span>
        </p>
        <p style={{ marginLeft: "5pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ marginLeft: "5pt", textAlign: "center" }}>
            <span style={{ fontFamily: "Tahoma" }}>=====</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <strong>
                <em>
                    <span style={{ fontFamily: "Tahoma" }}>ADMINISTRASI </span>
                </em>
            </strong>
            <strong>
                <em>
                    <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
                </em>
            </strong>
            <strong>
                <em>
                    <span style={{ fontFamily: "Tahoma" }}>
                        {(data.dataPermohonan.keterangan).toUpperCase()}
                    </span>
                </em>
            </strong>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
            <span style={{ fontFamily: "Tahoma" }}>=====</span>
        </p>
        <p style={{ marginLeft: "5pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ marginLeft: "5pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ marginLeft: "5pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>Demikian</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Surat Keterangan</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>
                ini Kami buat dengan sebenarnya untuk dapat dipergunakan sebagaimana
                mestinya
            </span>
        </p>
        <p>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", lineHeight: "1.2" }}>
            <tbody>
                <tr>
                    <td style={{ width: "50%", textAlign: "center", verticalAlign: "top" }}>
                        <p style={{ fontFamily: "Tahoma" }}>&nbsp; </p>
                        <p style={{ fontFamily: "Tahoma" }}>Tanda Tangan</p>
                        <p style={{ fontFamily: "Tahoma" }}>Yang bersangkutan</p>
                    </td>
                    <td style={{ width: "50%", textAlign: "center", verticalAlign: "top" }}>
                        <p style={{ fontFamily: "Tahoma" }}>
                            {lokasiSurat}, {formatTanggalSingkat(data.createdAt).replaceAll("/", " – ")}
                        </p>
                        <p style={{ fontFamily: "Tahoma" }}>Kepala Desa Cepoko</p>
                    </td>
                </tr>

                <tr>
                    <td style={{ height: "90px" }}></td>
                    <td></td>
                </tr>

                <tr>
                    <td style={{ textAlign: "center", verticalAlign: "top" }}>
                        <strong>
                            <u style={{ fontFamily: "Tahoma" }}>
                                {data.dataPermohonan.namaAhli.toUpperCase()}
                            </u>
                        </strong>
                    </td>
                    <td style={{ textAlign: "center", verticalAlign: "top" }}>
                        <strong>
                            <u style={{ fontFamily: "Tahoma" }}>{data.setting.namaKepdes}</u>
                        </strong>
                    </td>
                </tr>
            </tbody>
        </table>
    </>)
};