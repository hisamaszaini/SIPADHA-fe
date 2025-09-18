import type { PengajuanSuratDetail } from '../types/pengajuanSurat.types';
import { TemplateKeteranganUsaha } from './templates/TemplateKeteranganUsaha';

interface SuratTemplateRendererProps {
    data: PengajuanSuratDetail;
}

import "../assets/surat.css";
import { TemplateKtmSekolah } from './templates/TemplateKTMSekolah';

export function SuratTemplateRenderer({ data }: SuratTemplateRendererProps) {
    switch (data.jenis) {
        case 'KETERANGAN_USAHA':
            return (<>
                <div className='mx-auto'>
                    <div id="printArea" className="mx-auto w-[21cm] min-h-[29.7cm] border">
                        <div style={{
                            width: "21cm",
                            minHeight: "29.7cm",
                            paddingTop: "1.5cm",
                            paddingLeft: "2.5cm",
                            paddingRight: "1.5cm",
                            paddingBottom: "2cm",
                            lineHeight: "1"
                        }}>
                            <TemplateKeteranganUsaha data={data} />
                        </div>
                    </div>
                </div>
            </>);

        case 'KETERANGAN_TIDAK_MAMPU_SEKOLAH':
            return (<>
                <div className='mx-auto'>
                    <div id="printArea" className="mx-auto w-[21cm] min-h-[29.7cm] border">
                        <div style={{
                            width: "21cm",
                            minHeight: "29.7cm",
                            paddingTop: "1.5cm",
                            paddingLeft: "2.5cm",
                            paddingRight: "1.5cm",
                            paddingBottom: "2cm",
                            lineHeight: "1"
                        }}><TemplateKtmSekolah data={data} />
                        </div>
                    </div>
                </div>
            </>);

        default:
            return <div className="text-red-500">Template untuk jenis surat "{data.jenis}" tidak ditemukan.</div>;
    }
}