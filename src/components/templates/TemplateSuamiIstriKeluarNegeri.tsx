import type { DetailPengajuanSuratSchema } from '../../types/pengajuanSurat.types';
import { formatTanggal, formatTanggalSingkat } from '../../utils/date';
export function TemplateKeteranganSuamiIstriKeluarNegeri({ data }: { data: DetailPengajuanSuratSchema }) {
    const dataPermohonan = data.dataPermohonan as any;
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
        <p style={{ textAlign: "center" }}>
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
                    <span style={{ fontFamily: "Tahoma" }}>
                        KETERANGAN SUAMI/ISTERI DI LUAR NEGERI
                    </span>
                </u>
            </strong>
        </p>
        <p style={{ textAlign: "center" }}>
            <span style={{ fontFamily: "Tahoma" }}>NOMOR</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>474 /</span>
            <span style={{ fontFamily: "Tahoma" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
            <span style={{ fontFamily: "Tahoma" }}>/ 405.29.02.10/{tahunSurat}</span>
        </p>
        <p>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>
                Yang bertanda tangan di bawah ini Kepala
            </span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Desa</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Cepoko, Kecamatan</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>
                Ngrayun, Kabupaten Ponorogo, menerangkan dengan sebenarnya bahwa:
            </span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>

        <table style={{ fontFamily: "Tahoma", borderCollapse: "collapse", marginLeft: "45pt" }}>
            <tbody>
                <tr>
                    <td style={{ width: "160pt", verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Nama</td>
                    <td style={{ width: "10px", verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>:</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>
                        <strong style={{ lineHeight: 1.2 }}> {data.penduduk.nama?.toUpperCase()}</strong>
                    </td>
                </tr>

                <tr>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Jenis Kelamin</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>:</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>
                        <span style={{ textDecoration: data.penduduk.jenisKelamin !== "Laki-laki" ? "line-through" : "none", lineHeight: 1.2 }}>
                            Laki-laki
                        </span> /
                        <span style={{ textDecoration: data.penduduk.jenisKelamin !== "Perempuan" ? "line-through" : "none", lineHeight: 1.2 }}>
                            Perempuan
                        </span>
                    </td>
                </tr>

                <tr>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Tempat Tanggal Lahir / Umur</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>:</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>
                        {data.penduduk.tempatLahir}, {formatTanggalSingkat(data.penduduk.tanggalLahir).replaceAll('/', '-')}
                    </td>
                </tr>

                <tr>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Warga Negara</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>:</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Indonesia</td>
                </tr>

                <tr>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Pekerjaan</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>:</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>{data.penduduk.pekerjaan}</td>
                </tr>

                <tr>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Alamat</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>:</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>
                        RT {data.penduduk.kartuKeluarga.rt.nomor} RW {data.penduduk.kartuKeluarga.rt.rw.nomor} Dukuh {data.penduduk.kartuKeluarga.rt.rw.dukuh.nama} Desa Cepoko, Kecamatan Ngrayun, Kabupaten Ponorogo
                    </td>
                </tr>
            </tbody>
        </table>

        <p style={{ textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>
                Orang tersebut benar – benar Penduduk Desa kami yang sampai saat ini masih
                terikat
            </span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Perkawinan yang sah dengan :</span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>

        <table style={{ fontFamily: "Tahoma", borderCollapse: "collapse", marginLeft: "45pt" }}>
            <tbody>
                <tr>
                    <td style={{ width: "160pt", verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Nama</td>
                    <td style={{ width: "10px", verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>:</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>
                        <strong style={{ lineHeight: 1.2 }}> {data.penduduk.nama?.toUpperCase()}</strong>
                    </td>
                </tr>

                <tr>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Jenis Kelamin</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>:</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>
                        <span style={{ textDecoration: data.penduduk.jenisKelamin !== "Laki-laki" ? "line-through" : "none", lineHeight: 1.2 }}>
                            Laki-laki
                        </span> /
                        <span style={{ textDecoration: data.penduduk.jenisKelamin !== "Perempuan" ? "line-through" : "none", lineHeight: 1.2 }}>
                            Perempuan
                        </span>
                    </td>
                </tr>

                <tr>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Tempat Tanggal Lahir / Umur</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>:</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>
                        {data.penduduk.tempatLahir}, {formatTanggalSingkat(data.penduduk.tanggalLahir).replaceAll('/', '-')}
                    </td>
                </tr>

                <tr>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Warga Negara</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>:</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Indonesia</td>
                </tr>

                <tr>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Pekerjaan</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>:</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>{data.penduduk.pekerjaan}</td>
                </tr>

                <tr>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>Alamat</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>:</td>
                    <td style={{ verticalAlign: "top", lineHeight: 1.2, padding: 0 }}>
                        RT {data.penduduk.kartuKeluarga.rt.nomor} RW {data.penduduk.kartuKeluarga.rt.rw.nomor} Dukuh {data.penduduk.kartuKeluarga.rt.rw.dukuh.nama} Desa Cepoko, Kecamatan Ngrayun, Kabupaten Ponorogo
                    </td>
                </tr>
            </tbody>
        </table>

        <p style={{ marginLeft: "45pt" }}>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
            </em>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "center" }}>
            <span style={{ fontFamily: "Tahoma" }}>Surat Keterangan ini</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>
                di pergunakan untuk kelengkapan persyaratan :
            </span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "center" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "center" }}>
            <strong>
                <span style={{ fontFamily: "Tahoma" }}>=== {(dataPermohonan.keterangan).toUpperCase()} ===</span>
            </strong>
        </p>
        <p>
            <strong>
                <em>
                    <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
                </em>
            </strong>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>Demikian</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Surat Keterangan</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>
                ini Kami buat dengan sebenarnya untuk dapat dipergunakan sebagaimana
                mestinya.
            </span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
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
            <span style={{ fontFamily: "Tahoma" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
        </p>

        <table
            style={{
                marginLeft: "45pt",
                borderCollapse: "collapse",
                fontFamily: "Tahoma",
                lineHeight: "1"
            }}
        >
            <tbody>
                <tr>
                    {/* Kolom kiri (bisa kosong atau diisi konten) */}
                    <td
                        style={{
                            width: "45%", // 2. Gunakan persentase
                            verticalAlign: "top",
                            marginLeft: "200pt"
                        }}
                    >
                        <p style={{ margin: 0, padding: 0 }}>
                            &nbsp;
                        </p>
                        <p style={{ margin: 0, padding: 0 }}>
                            Pemegang Surat
                        </p>
                        <div style={{ height: "80px" }}></div>
                        <p style={{ margin: 0, padding: 0 }}>
                            <strong>
                                <u>{(data.penduduk.nama).toUpperCase()}</u>
                            </strong>
                        </p>
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
    </>);
};