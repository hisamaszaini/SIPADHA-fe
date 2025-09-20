import type { DetailPengajuanSuratSchema } from '../../types/pengajuanSurat.types';
import { formatTanggal, formatTanggalSingkat } from '../../utils/date';
export function TemplateKeteranganDomisili({ data, }: { data: Extract<DetailPengajuanSuratSchema, { jenis: "KETERANGAN_DOMISILI" }>; }) {
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
                <u>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>SURAT</span>
                </u>
            </strong>
            <strong>
                <u>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                </u>
            </strong>
            <strong>
                <u>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>KETERANGAN</span>
                </u>
            </strong>
            <strong>
                <u>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                </u>
            </strong>
            <strong>
                <u>
                    <span style={{ fontFamily: '"Bookman Old Style"' }}>DOMISILI</span>
                </u>
            </strong>
        </p>
        <p style={{ textAlign: "center" }}>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>Nomor</span>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>474/</span>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;&nbsp; </span>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                /405.29.02.10/2025
            </span>
        </p>
        <p style={{ textAlign: "center" }}>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
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
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Yang bertanda tangan dibawah ini
                            </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                &nbsp;&nbsp;{" "}
                            </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
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
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
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
                        <p style={{ textAlign: "justify", lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>Nama</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "3.35pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ textAlign: "center", lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "272.7pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ textAlign: "justify", lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
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
                        <p style={{ textAlign: "justify", lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>NIK</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "3.35pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ textAlign: "center", lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "272.7pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ textAlign: "justify", lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                350202 170562 0001
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
                        <p style={{ textAlign: "justify", lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>Jabatan</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "3.35pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ textAlign: "center", lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "272.7pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ textAlign: "justify", lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Kepala Desa{" "}
                            </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
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
                        <p style={{ textAlign: "center", lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "3.35pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ textAlign: "center", lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "272.7pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ textAlign: "justify", lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Kabupaten Ponorogo
                            </span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p style={{ textAlign: "center", fontSize: "5pt" }}>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
        </p>
        <table style={{ padding: "0pt", borderCollapse: "collapse" }}>
            <tbody>
                <tr>
                    <td
                        colSpan={3}
                        style={{
                            width: "448.7pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Dengan ini menerangkan bahwa penduduk :
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
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>Nama </span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "3.85pt",
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
                            width: "272.7pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ lineHeight: "115%" }}>
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
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Tempat Tanggal Lahir{" "}
                            </span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "3.85pt",
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
                            width: "272.7pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                {data.penduduk.tempatLahir}, {formatTanggalSingkat(data.penduduk.tanggalLahir).replaceAll('/', '-')}
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
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>NIK</span>
                        </p>
                    </td>
                    <td
                        style={{
                            width: "3.85pt",
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
                            width: "272.7pt",
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
                            width: "150.55pt",
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
                            width: "3.85pt",
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
                            width: "272.7pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Dukuh {data.penduduk.kartuKeluarga.rt.rw.dukuh.nama} RT {data.penduduk.kartuKeluarga.rt.nomor} RW {data.penduduk.kartuKeluarga.rt.rw.nomor} Desa Cepoko Kecamatan Ngrayun Kabupaten
                                Ponorogo
                            </span>
                        </p>
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td
                        colSpan={3}
                        style={{
                            width: "448.7pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Menerangkan dengan sebenarnya bahwa yang bersangkutan diatas
                                Berdomisili di Dukuh {data.penduduk.kartuKeluarga.rt.rw.dukuh.nama} RT {data.penduduk.kartuKeluarga.rt.nomor} RW {data.penduduk.kartuKeluarga.rt.rw.nomor} Desa
                            </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>Cepoko,</span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>Kecamatan</span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>Ngrayun,</span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>Kabupaten</span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>Ponorogo.</span>
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
                        </p>
                        <p style={{ textAlign: "justify", lineHeight: "150%" }}>
                            <span
                                style={{
                                    width: "45pt",
                                    fontFamily: "Tahoma",
                                    display: "inline-block"
                                }}
                            >
                                &nbsp;
                            </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Surat Keterangan ini
                            </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                dipergunakan untuk persyaratan
                            </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp; </span>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>:</span>
                        </p>
                        <p style={{ textAlign: "center", lineHeight: "150%" }}>
                            <strong>
                                <span style={{ fontFamily: "Tahoma" }}>=======</span>
                            </strong>
                            <strong>
                                <span style={{ fontFamily: "Tahoma" }}>&nbsp; {data.dataPermohonan?.keterangan} &nbsp;</span>
                            </strong>
                            <strong>
                                <span style={{ fontFamily: "Tahoma" }}>=======</span>
                            </strong>
                        </p>
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td
                        colSpan={3}
                        style={{
                            width: "448.7pt",
                            padding: "0pt 5.4pt",
                            verticalAlign: "top"
                        }}
                    >
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>
                                Demikian Surat Keterangan ini dibuat dengan sebenarnya untuk dapat
                                dipergunakan seperlunya
                            </span>
                        </p>
                        <p style={{ lineHeight: "115%" }}>
                            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p style={{ textAlign: "center" }}>
            <span style={{ fontFamily: '"Bookman Old Style"' }}>&nbsp;</span>
        </p>
        <table
            style={{
                width: "90%", // 1. Buat lebar tabel penuh
                borderCollapse: "collapse",
                fontFamily: '"Bookman Old Style", serif'
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
                            width: "50%", // 2. Gunakan persentase
                            verticalAlign: "top",
                            textAlign: "center" // 3. Gunakan text-align untuk perataan
                        }}
                    >
                        <p style={{ margin: 0, padding: 0 }}>
                            Ponorogo, {formatTanggal(data.createdAt)}
                        </p>
                        <p style={{ margin: 0, padding: 0 }}>
                            Kepala Desa Cepoko
                        </p>

                        {/* 4. Jarak vertikal yang lebih baik */}
                        <div style={{ height: "80px" }}></div>

                        <p style={{ margin: 0, padding: 0 }}>
                            <strong>
                                <u>MUHAMMAD HISAM ASZAINI</u>
                            </strong>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </>);
};