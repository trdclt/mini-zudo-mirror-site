
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { Upload } from 'lucide-react';

const sizes = [
  { value: '20cm', label: '20cm', price: 'R$ 149,90' },
  { value: '30cm', label: '30cm', price: 'R$ 199,90' },
  { value: '50cm', label: '50cm', price: 'R$ 299,90' },
];

const CreateMini: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [step, setStep] = useState(1);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const nextStep = () => {
    if (step === 1 && selectedSize) {
      setStep(2);
    }
  };

  const isFormValid = selectedSize && image && description.trim().length > 10;

  return (
    <section className="py-16 bg-gray-900" id="criar">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-xl p-8 card-shadow">
          <h2 className="text-3xl font-bold text-center mb-8">
            Monte seu <span className="text-meumini-orange">MeuMini</span> em 3 passos
          </h2>
          
          <div className="flex justify-between mb-8">
            <div className={`step-indicator relative flex items-center justify-center ${step >= 1 ? 'text-white' : 'text-gray-500'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-meumini-orange' : 'bg-gray-700'}`}>1</div>
              <span className="absolute -bottom-6 whitespace-nowrap">Escolher tamanho</span>
            </div>
            <div className="grow mx-4 pt-5">
              <div className={`h-1 ${step >= 2 ? 'bg-meumini-orange' : 'bg-gray-700'}`}></div>
            </div>
            <div className={`step-indicator relative flex items-center justify-center ${step >= 2 ? 'text-white' : 'text-gray-500'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-meumini-orange' : 'bg-gray-700'}`}>2</div>
              <span className="absolute -bottom-6 whitespace-nowrap">Personalizar</span>
            </div>
            <div className="grow mx-4 pt-5">
              <div className={`h-1 ${step >= 3 ? 'bg-meumini-orange' : 'bg-gray-700'}`}></div>
            </div>
            <div className={`step-indicator relative flex items-center justify-center ${step >= 3 ? 'text-white' : 'text-gray-500'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-meumini-orange' : 'bg-gray-700'}`}>3</div>
              <span className="absolute -bottom-6 whitespace-nowrap">Finalizar</span>
            </div>
          </div>
          
          <div className="mt-16">
            {step === 1 && (
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-6">Escolha o tamanho ideal para o seu MeuMini</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {sizes.map((size) => (
                    <div
                      key={size.value}
                      className={`cursor-pointer ${selectedSize === size.value ? 'ring-2 ring-meumini-orange' : ''}`}
                    >
                      <Toggle
                        pressed={selectedSize === size.value}
                        onPressedChange={() => setSelectedSize(size.value)}
                        className="w-full h-32 flex flex-col items-center justify-center rounded-lg border border-gray-700"
                      >
                        <span className="text-2xl font-bold">{size.label}</span>
                        <span className="text-meumini-orange mt-2">{size.price}</span>
                      </Toggle>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button 
                    onClick={nextStep} 
                    className="button-gradient"
                    disabled={!selectedSize}
                  >
                    Próximo
                  </Button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-6">Personalize seu MeuMini</h3>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="photo" className="block mb-2">Envie uma foto de referência</Label>
                    <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                      {image ? (
                        <div className="flex flex-col items-center">
                          <img 
                            src={URL.createObjectURL(image)} 
                            alt="Preview" 
                            className="max-h-40 mb-4"
                          />
                          <p className="text-sm text-meumini-light-gray">{image.name}</p>
                          <Button 
                            variant="outline" 
                            className="mt-2" 
                            onClick={() => setImage(null)}
                          >
                            Trocar imagem
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Upload className="h-12 w-12 text-gray-500 mb-4" />
                          <p className="text-sm text-meumini-light-gray mb-4">
                            Arraste sua imagem ou clique para fazer o upload
                          </p>
                          <Input
                            id="photo"
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                          />
                          <Label htmlFor="photo" className="cursor-pointer">
                            <Button variant="outline">Escolher arquivo</Button>
                          </Label>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description" className="block mb-2">Descrição personalizada</Label>
                    <Textarea
                      id="description"
                      placeholder="Descreva como você gostaria que sua miniatura fosse. Inclua detalhes importantes como cores, posição, elementos adicionais, etc."
                      className="h-32"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <p className="mt-2 text-xs text-meumini-light-gray">
                      {description.length}/300 caracteres. Mínimo de 10 caracteres.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button 
                    onClick={() => setStep(1)} 
                    variant="outline"
                  >
                    Voltar
                  </Button>
                  <Button 
                    className="button-gradient"
                    disabled={!image || description.trim().length < 10}
                    onClick={() => setStep(3)}
                  >
                    Revisar
                  </Button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-6">Finalize seu pedido</h3>
                
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-4">Resumo do pedido</h4>
                  <div className="space-y-2 text-meumini-light-gray">
                    <p><span className="font-medium text-white">Tamanho:</span> {selectedSize}</p>
                    <p><span className="font-medium text-white">Imagem:</span> {image?.name}</p>
                    <p><span className="font-medium text-white">Descrição:</span> {description}</p>
                  </div>
                  
                  <div className="border-t border-gray-700 mt-4 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Preço</span>
                      <span className="text-xl font-bold text-meumini-orange">
                        {selectedSize === '20cm' ? 'R$ 149,90' : selectedSize === '30cm' ? 'R$ 199,90' : 'R$ 299,90'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-meumini-light-gray mt-1">
                      <span>Tempo de produção</span>
                      <span>15-20 dias úteis</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    onClick={() => setStep(2)} 
                    variant="outline"
                  >
                    Voltar
                  </Button>
                  <Button 
                    className="button-gradient"
                    disabled={!isFormValid}
                  >
                    Comprar Agora
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateMini;
