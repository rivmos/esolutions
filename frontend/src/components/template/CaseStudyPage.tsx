import { Link } from 'react-router-dom';
import { baseUrl } from '@/configs/app.config';
import '@/assets/styles/profile.css'
import { Button } from '@/components/ui';
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { ArtistState } from '@/@types/artist';
import classNames from 'classnames';
import { CaseStudyState } from '@/@types/casestudy';

const CaseStudyPage = ({ caseStudyData, webVersion = false }: { caseStudyData: CaseStudyState, webVersion?: boolean }) => {
    const {title, description, content, image} = caseStudyData
    return (
        <div className={classNames("container mx-auto h-full", { 'container mx-auto !py-16': webVersion })}>
                {title && <h2 className="text-2xl uppercase text-center font-bold mb-2">{title}</h2>}
                {description && <p className="text-gray-700 mb-4 text-center">{description}</p>}
            <div className="mb-6">
                {image && (
                    <img src={`${baseUrl}/uploads/casestudies/${image}`} alt={title} className="w-full h-64 object-cover rounded-t-lg" />
                )}
                <div className="p-4">
                    {content && <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyPage;
