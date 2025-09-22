import "../assets/surat.css";
import type { DetailPengajuanSuratSchema } from '../types/pengajuanSurat.types';
import { TemplateKeteranganDomisili } from "./templates/TemplateKeteranganDomisili";
import { TemplateKeteranganProfesi } from "./templates/TemplateKeteranganProfesi";
import { TemplateKeteranganTmMobil } from "./templates/TemplateKeteranganTmMobil";
import { TemplateKeteranganUsaha } from './templates/TemplateKeteranganUsaha';
import { TemplateKtmSekolah } from './templates/TemplateKtmSekolah';
import { TemplateKeteranganSuamiIstriKeluarNegeri } from "./templates/TemplateSuamiIstriKeluarNegeri";

interface SuratTemplateRendererProps {
    data: DetailPengajuanSuratSchema;
}

export function SuratTemplateRenderer({ data }: SuratTemplateRendererProps) {
    let TemplateComponent;

    switch (data.jenis) {
        case 'KETERANGAN_USAHA':
            TemplateComponent = <TemplateKeteranganUsaha data={data} />;
            break;

        case 'KETERANGAN_TIDAK_MAMPU_SEKOLAH':
            TemplateComponent = <TemplateKtmSekolah data={data} />;
            break;

        case 'KETERANGAN_SUAMI_ISTRI_KELUAR_NEGERI':
            TemplateComponent = <TemplateKeteranganSuamiIstriKeluarNegeri data={data} />;
            break;

        case 'KETERANGAN_TIDAK_MEMILIKI_MOBIL':
            TemplateComponent = <TemplateKeteranganTmMobil data={data} />;
            break;

        case 'KETERANGAN_PROFESI':
            TemplateComponent = <TemplateKeteranganProfesi data={data} />;
            break;

        case 'KETERANGAN_DOMISILI':
            TemplateComponent = <TemplateKeteranganDomisili data={data} />;
            break;

        default:
            TemplateComponent = (
                <div className="text-red-500">
                    Template tidak ditemukan!
                </div>
            );
    }

    return (
        <div className="mx-auto">
            <div
                id="printArea"
                className="mx-auto w-[21cm] min-h-[29.7cm] border">
                <div style={{
                    width: "21cm",
                    minHeight: "29.7cm",
                    paddingTop: "1.5cm",
                    paddingLeft: "2.5cm",
                    paddingRight: "1.5cm",
                    paddingBottom: "2cm",
                    lineHeight: "1"
                }}>
                    {TemplateComponent}
                </div>
            </div>
        </div>
    );
}                        
