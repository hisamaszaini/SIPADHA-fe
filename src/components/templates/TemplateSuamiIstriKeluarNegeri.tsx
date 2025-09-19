import type { DetailPengajuanSuratSchema } from '../../types/pengajuanSurat.types';
import { formatTanggalSingkat } from '../../utils/date';
export function TemplateKeteranganSuamiIstriKeluarNegeri({ data }: { data: DetailPengajuanSuratSchema }) {
    const dataPermohonan = data.dataPermohonan as any;

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
            <span style={{ fontFamily: "Tahoma" }}>/ 405.29.02.10/2025</span>
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
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>N a m a</span>
            <span
                style={{
                    width: "12.06pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
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
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span
                style={{ width: "28.5pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <strong>
                <span style={{ fontFamily: "Tahoma" }}>{(data.penduduk.nama).toUpperCase()}</span>
            </strong>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>Jenis Kelamin</span>
            <span
                style={{
                    width: "27.22pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
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
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            {/* Laki-laki */}
            <span
                style={{
                    fontFamily: "Tahoma",
                    textDecoration: data.penduduk.jenisKelamin !== "Laki-laki" ? "line-through" : "none",
                }}
            >
                Laki-laki
            </span>

            <span style={{ fontFamily: "Tahoma" }}> / </span>

            {/* Perempuan */}
            <span
                style={{
                    fontFamily: "Tahoma",
                    textDecoration: data.penduduk.jenisKelamin !== "Perempuan" ? "line-through" : "none",
                }}
            >
                Perempuan
            </span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>Tempat Tanggal Lahir / Umur</span>
            <span
                style={{
                    width: "13.77pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
            >
                &nbsp;
            </span>
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>{data.penduduk.tempatLahir}, {formatTanggalSingkat(data.penduduk.tanggalLahir).replaceAll('/', '-')}</span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>Warga Negara</span>
            <span
                style={{
                    width: "22.99pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
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
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Indonesia</span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>Pekerjaan</span>
            <span
                style={{ width: "1.78pt", fontFamily: "Tahoma", display: "inline-block" }}
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
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>{data.penduduk.pekerjaan}</span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>Alamat</span>
            <span
                style={{
                    width: "17.37pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
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
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
            <span style={{ fontFamily: "Tahoma" }}>
                {" "} RT {data.penduduk.kartuKeluarga.rt.nomor} RW {data.penduduk.kartuKeluarga.rt.rw.nomor} Dukuh {data.penduduk.kartuKeluarga.rt.rw.dukuh.nama} Desa Cepoko,
            </span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span
                style={{ width: "45pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
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
            <span style={{ fontFamily: "Tahoma" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
            <span style={{ fontFamily: "Tahoma" }}>Kecamatan Ngrayun, Kabupaten</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Ponorogo.</span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>
                Orang tersebut benar – benar Penduduk Desa kami yang sampai saat ini masih
                terikat
            </span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Perkawinan yang syah dengan :</span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span
                style={{ width: "45pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
            <span style={{ fontFamily: "Tahoma" }}>N a m a</span>
            <span
                style={{
                    width: "12.06pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
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
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <strong>
                <span style={{ fontFamily: "Tahoma" }}>{(data.target?.nama)?.toUpperCase()}</span>
            </strong>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span
                style={{ width: "45pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
            <span style={{ fontFamily: "Tahoma" }}>Jenis</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Kelamin</span>
            <span
                style={{
                    width: "23.47pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
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
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span
                style={{
                    fontFamily: "Tahoma",
                    textDecoration: data.target?.jenisKelamin !== "Laki-laki" ? "line-through" : "none",
                }}
            >
                Laki-laki
            </span>

            <span style={{ fontFamily: "Tahoma" }}> / </span>

            {/* Perempuan */}
            <span
                style={{
                    fontFamily: "Tahoma",
                    textDecoration: data.target?.jenisKelamin !== "Perempuan" ? "line-through" : "none",
                }}
            >
                Perempuan
            </span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span
                style={{ width: "45pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
            <span style={{ fontFamily: "Tahoma" }}>Tempat Tanggal Lahir / Umur</span>
            <span
                style={{
                    width: "13.77pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
            >
                &nbsp;
            </span>
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>{data.target?.tempatLahir}, {formatTanggalSingkat(data.target?.tanggalLahir).replaceAll('/', '-')}</span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span
                style={{ width: "45pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
            <span style={{ fontFamily: "Tahoma" }}>Warga Negara</span>
            <span
                style={{
                    width: "22.99pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
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
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Indonesia</span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span
                style={{ width: "45pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
            <span style={{ fontFamily: "Tahoma" }}> Pekerjaan</span>
            <span
                style={{ width: "7.03pt", fontFamily: "Tahoma", display: "inline-block" }}
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
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Petani</span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span
                style={{ width: "45pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
            <span style={{ fontFamily: "Tahoma" }}>Alamat</span>
            <span
                style={{
                    width: "17.37pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
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
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>
                {" "} RT {data.penduduk.kartuKeluarga.rt.nomor} RW {data.penduduk.kartuKeluarga.rt.rw.nomor} Dukuh {data.penduduk.kartuKeluarga.rt.rw.dukuh.nama} Desa
            </span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
            <span style={{ fontFamily: "Tahoma" }}>Cepoko,</span>
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
            <span style={{ fontFamily: "Tahoma" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span style={{ fontFamily: "Tahoma" }}>{" "} Kecamatan</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Ngrayun,</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Kabupaten</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Ponorogo.</span>
        </p>
        <p style={{ marginLeft: "45pt" }}>
            <span style={{ fontFamily: "Tahoma" }}>Keterangan</span>
            <span
                style={{ width: "2.36pt", fontFamily: "Tahoma", display: "inline-block" }}
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
            <span style={{ fontFamily: "Tahoma" }}>:</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>YANG</span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>BERSANGKUTAN</span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>a.n</span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
            </em>
            <strong>
                <em>
                    <span style={{ fontFamily: "Tahoma" }}>{(data.target?.nama)?.toUpperCase()}</span>
                </em>
            </strong>
        </p>
        <p style={{ marginLeft: "45pt" }}>
            <em>
                <span
                    style={{ width: "54pt", fontFamily: "Tahoma", display: "inline-block" }}
                >
                    &nbsp;
                </span>
            </em>
            <em>
                <span
                    style={{ width: "9pt", fontFamily: "Tahoma", display: "inline-block" }}
                >
                    &nbsp;
                </span>
            </em>
            <em>
                <span
                    style={{ width: "36pt", fontFamily: "Tahoma", display: "inline-block" }}
                >
                    &nbsp;
                </span>
            </em>
            <em>
                <span
                    style={{ width: "36pt", fontFamily: "Tahoma", display: "inline-block" }}
                >
                    &nbsp;
                </span>
            </em>
            <em>
                <span
                    style={{ width: "36pt", fontFamily: "Tahoma", display: "inline-block" }}
                >
                    &nbsp;
                </span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>&nbsp;&nbsp;&nbsp; </span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>
                    {data.target?.jenisKelamin === "Perempuan" ? "(ISTRI)" : "(SUAMI)"} SEJAK TAHUN {dataPermohonan.tahun}
                </span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>BEKERJA</span>
            </em>
        </p>
        <p style={{ marginLeft: "45pt" }}>
            <em>
                <span
                    style={{ width: "54pt", fontFamily: "Tahoma", display: "inline-block" }}
                >
                    &nbsp;
                </span>
            </em>
            <em>
                <span
                    style={{ width: "9pt", fontFamily: "Tahoma", display: "inline-block" }}
                >
                    &nbsp;
                </span>
            </em>
            <em>
                <span
                    style={{ width: "36pt", fontFamily: "Tahoma", display: "inline-block" }}
                >
                    &nbsp;
                </span>
            </em>
            <em>
                <span
                    style={{ width: "36pt", fontFamily: "Tahoma", display: "inline-block" }}
                >
                    &nbsp;
                </span>
            </em>
            <em>
                <span
                    style={{ width: "36pt", fontFamily: "Tahoma", display: "inline-block" }}
                >
                    &nbsp;
                </span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}> </span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>SEBAGAI TKI DI NEGARA</span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            </em>
            <em>
                <span style={{ fontFamily: "Tahoma" }}>{(dataPermohonan.negaraTujuan).toUpperCase()}.</span>
            </em>
        </p>
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
            <span style={{ fontFamily: "Tahoma" }}>Cepoko,</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>{formatTanggalSingkat(data.createdAt).replaceAll("/", " / ")}</span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>Pemegang Surat</span>
            <span
                style={{
                    width: "11.65pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
            <span style={{ fontFamily: "Tahoma" }}>Kepala</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Desa</span>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
            <span style={{ fontFamily: "Tahoma" }}>Cepoko</span>
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
            <span style={{ fontFamily: "Tahoma" }}>&nbsp; </span>
        </p>
        <p style={{ textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ marginLeft: "45pt", textAlign: "justify" }}>
            <span style={{ fontFamily: "Tahoma" }}>&nbsp;</span>
        </p>
        <p style={{ marginLeft: "45pt", marginTop: "25pt", textAlign: "justify" }}>
            <strong>
                <u>
                    <span style={{ fontFamily: "Tahoma" }}>{(data.penduduk.nama).toUpperCase()}</span>
                </u>
            </strong>
            <span
                style={{
                    width: "16.27pt",
                    fontFamily: "Tahoma",
                    display: "inline-block"
                }}
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
            <span
                style={{ width: "2.25pt", fontFamily: "Tahoma", display: "inline-block" }}
            >
                &nbsp;
            </span>
            <strong>
                <u>
                    <span style={{ fontFamily: "Tahoma", marginLeft: "75pt", textAlign: "center" }}>PIRNGADI,S.Sos</span>
                </u>
            </strong>
        </p>
    </>);
};